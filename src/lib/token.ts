// 視聴期限：公式LINE登録日（=Lステップ「配信日」）を含めて3日間
// 例: 5/14登録 → 5/14・5/15・5/16が視聴可能、5/17 00:00(JST)で期限切れ
export const VIEWING_DAYS = 3;

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

export type VerifyResult =
  | {
      status: "ok";
      registeredDate: Date;
      lastViewableDate: Date;
      expiresAt: Date;
      remainingMs: number;
    }
  | {
      status: "expired";
      registeredDate: Date;
      lastViewableDate: Date;
      expiresAt: Date;
    }
  | { status: "invalid"; reason: string };

/**
 * 視聴URLパラメータ t を検証する。
 * t は公式LINE（Lステップ）の「配信日」差し込み値。形式は YYYY/M/D のスラッシュ区切り。
 *   例: https://ad-ai-school.vercel.app/watch?t=2026/05/14
 * 視聴期限は JST 基準で「登録日を含めて3日間」。署名検証は行わない（スタートプランでは署名生成不可のため）。
 */
export function verifyDateParam(t: string | undefined): VerifyResult {
  if (!t) {
    return { status: "invalid", reason: "視聴URLのパラメータが不足しています" };
  }

  // YYYY/M/D（ゼロ埋め有無どちらも許容）
  const m = t.trim().match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
  if (!m) {
    return { status: "invalid", reason: "視聴URLの日付形式が正しくありません" };
  }

  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);

  // 暦日として妥当かチェック（例: 2026/13/40 や 2026/02/30 を弾く）
  const baseUtcMs = Date.UTC(year, month - 1, day);
  const check = new Date(baseUtcMs);
  if (
    check.getUTCFullYear() !== year ||
    check.getUTCMonth() !== month - 1 ||
    check.getUTCDate() !== day
  ) {
    return { status: "invalid", reason: "存在しない日付です" };
  }

  // JST 00:00 を絶対時刻（UTCミリ秒）で表す
  const registeredMs = baseUtcMs - JST_OFFSET_MS;
  const expiresMs = registeredMs + VIEWING_DAYS * DAY_MS;

  const registeredDate = new Date(registeredMs);
  const expiresAt = new Date(expiresMs);
  // 表示用の最終視聴日（期限の前日）= 登録日 + (VIEWING_DAYS - 1)
  const lastViewableDate = new Date(registeredMs + (VIEWING_DAYS - 1) * DAY_MS);

  const remainingMs = expiresMs - Date.now();
  if (remainingMs <= 0) {
    return { status: "expired", registeredDate, lastViewableDate, expiresAt };
  }

  return {
    status: "ok",
    registeredDate,
    lastViewableDate,
    expiresAt,
    remainingMs,
  };
}

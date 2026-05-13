import crypto from "crypto";

// Lステップ契約後に環境変数 WEBINAR_SECRET をVercelで設定する
// 設定がない場合のフォールバック（開発用）
const SECRET = process.env.WEBINAR_SECRET ?? "dev-only-secret-please-change-in-production";

// 視聴期限：3日 = 72時間
export const VIEWING_WINDOW_MS = 72 * 60 * 60 * 1000;

/**
 * URLパラメータ用のトークンを生成する
 * usage: 開発時にテスト用URLを発行する
 *   const token = signToken(new Date());
 *   ?t=<token.t>&s=<token.s>
 */
export function signToken(registeredAt: Date): { t: string; s: string } {
  const t = registeredAt.toISOString();
  const s = crypto
    .createHmac("sha256", SECRET)
    .update(t)
    .digest("hex")
    .slice(0, 16);
  return { t, s };
}

export type VerifyResult =
  | { status: "ok"; registeredAt: Date; expiresAt: Date; remainingMs: number }
  | { status: "expired"; registeredAt: Date; expiresAt: Date }
  | { status: "invalid"; reason: string };

/**
 * URLパラメータのトークンを検証する
 */
export function verifyToken(t: string | undefined, s: string | undefined): VerifyResult {
  if (!t || !s) {
    return { status: "invalid", reason: "パラメータが不足しています" };
  }

  // ISO日時パース、もしくはUNIX秒対応（柔軟に）
  let registeredAt: Date;
  if (/^\d+$/.test(t)) {
    // UNIX秒
    registeredAt = new Date(parseInt(t, 10) * 1000);
  } else {
    registeredAt = new Date(t);
  }

  if (isNaN(registeredAt.getTime())) {
    return { status: "invalid", reason: "不正な日時パラメータです" };
  }

  // 署名検証
  const expectedS = crypto
    .createHmac("sha256", SECRET)
    .update(registeredAt.toISOString())
    .digest("hex")
    .slice(0, 16);

  // 署名検証緩和版（ISO形式の文字列直接でも、parse後のISO形式でもどちらでも通る）
  const rawT = t;
  const expectedRawS = crypto
    .createHmac("sha256", SECRET)
    .update(rawT)
    .digest("hex")
    .slice(0, 16);

  if (!safeCompare(s, expectedS) && !safeCompare(s, expectedRawS)) {
    return { status: "invalid", reason: "署名が一致しません" };
  }

  const expiresAt = new Date(registeredAt.getTime() + VIEWING_WINDOW_MS);
  const now = Date.now();
  const remainingMs = expiresAt.getTime() - now;

  if (remainingMs <= 0) {
    return { status: "expired", registeredAt, expiresAt };
  }

  return { status: "ok", registeredAt, expiresAt, remainingMs };
}

function safeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
  } catch {
    return false;
  }
}

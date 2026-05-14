export const dynamic = "force-dynamic";

export const metadata = {
  robots: { index: false, follow: false },
};

// JST の Date を返す（UTCゲッターで読む前提でオフセット済み）
function nowJst(): Date {
  return new Date(Date.now() + 9 * 60 * 60 * 1000);
}

// JST日付を YYYY/MM/DD 形式の文字列にする
function formatJst(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}/${m}/${day}`;
}

/**
 * 開発・運用テスト用：視聴ページの各状態を確認するためのテストURL一覧。
 * Lステップ設定前／改修後の挙動確認に使う。本番運用時は削除推奨。
 */
export default function WatchDevPage() {
  const today = nowJst();
  const fourDaysAgo = new Date(today.getTime() - 4 * 24 * 60 * 60 * 1000);

  const baseUrl = "/watch";
  const validUrl = `${baseUrl}?t=${formatJst(today)}`;
  const expiredUrl = `${baseUrl}?t=${formatJst(fourDaysAgo)}`;
  const invalidUrl = `${baseUrl}?t=2026/99/99`;
  const cookieUrl = baseUrl;

  return (
    <main className="min-h-screen bg-bg-soft p-8">
      <div className="max-w-3xl mx-auto bg-white border border-silver/70 rounded-2xl p-8 shadow-md">
        <h1 className="text-2xl font-black text-navy-600 mb-2">
          ウェビナー視聴ページ 動作確認
        </h1>
        <p className="text-xs text-text-soft mb-6">
          このページは開発・運用テスト用です。視聴ページの各状態をここから確認できます
        </p>

        <div className="space-y-4">
          <DevLinkRow
            label="①視聴可能"
            description="本日（JST）の日付で発行したURL（登録日を含めて3日間）"
            url={validUrl}
          />
          <DevLinkRow
            label="②視聴期限切れ"
            description="4日前の日付で発行したURL"
            url={expiredUrl}
          />
          <DevLinkRow
            label="③不正なURL"
            description="存在しない日付（2026/99/99）"
            url={invalidUrl}
          />
          <DevLinkRow
            label="④Cookieフォールバック"
            description="パラメータなし。初回アクセス日を起点に3日間（既存友だち向け手動配信用）"
            url={cookieUrl}
          />
        </div>

        <div className="mt-8 pt-6 border-t border-silver">
          <h2 className="font-bold text-navy-600 mb-3">Lステップ連携の設定方法</h2>
          <p className="text-xs text-text-soft leading-relaxed mb-3">
            シナリオ配信の1通目（配信タイミング「購読開始直後」）の本文に、
            このフォーマットでURLを記載します：
          </p>
          <pre className="bg-bg-tint p-3 rounded text-[11px] overflow-x-auto">
{`https://ad-ai-school.vercel.app/watch?t=（「配信日」を差し込み）`}
          </pre>
          <ul className="text-[11px] text-text-light mt-3 leading-relaxed list-disc pl-4 space-y-1">
            <li>
              「配信日」差し込みは <code>年月日（スラッシュ区切り）(YYYY/M/D)</code> を選ぶ
            </li>
            <li>「このメッセージではURLを短縮しない」にチェックを入れる</li>
            <li>視聴期限は登録日を含めて3日間（JST基準）。署名は使わない</li>
            <li>
              リマインドはシナリオ配信の「経過時間指定」で 1日後・2日後 に送ると期限と揃う
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function DevLinkRow({
  label,
  description,
  url,
}: {
  label: string;
  description: string;
  url: string;
}) {
  return (
    <div className="bg-bg-soft border border-silver rounded-xl p-4">
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <div className="font-bold text-navy-600 text-sm">{label}</div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-gold-deep hover:underline whitespace-nowrap"
        >
          開く →
        </a>
      </div>
      <p className="text-xs text-text-soft mb-2">{description}</p>
      <code className="text-[11px] text-text-light break-all">{url}</code>
    </div>
  );
}

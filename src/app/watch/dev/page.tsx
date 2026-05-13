import { signToken } from "@/lib/token";

export const dynamic = "force-dynamic";

export const metadata = {
  robots: { index: false, follow: false },
};

/**
 * 開発・運用テスト用：現時刻でトークンを発行してテストURLを表示する
 * Lステップ設定前の動作確認用ページ
 * 本番運用時は手動で動作確認 or 削除推奨
 */
export default function WatchDevPage() {
  const now = new Date();
  const token = signToken(now);

  // パターン別テストURL
  const baseUrl = "/watch";
  const validUrl = `${baseUrl}?t=${encodeURIComponent(token.t)}&s=${token.s}`;

  // 期限切れシミュレーション（4日前）
  const fourDaysAgo = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000);
  const expiredToken = signToken(fourDaysAgo);
  const expiredUrl = `${baseUrl}?t=${encodeURIComponent(expiredToken.t)}&s=${expiredToken.s}`;

  // 不正な署名
  const invalidUrl = `${baseUrl}?t=${encodeURIComponent(token.t)}&s=invalid-signature`;

  return (
    <main className="min-h-screen bg-bg-soft p-8">
      <div className="max-w-3xl mx-auto bg-white border border-silver/70 rounded-2xl p-8 shadow-md">
        <h1 className="text-2xl font-black text-navy-600 mb-2">
          ウェビナー視聴ページ 動作確認
        </h1>
        <p className="text-xs text-text-soft mb-6">
          このページは開発・運用テスト用です。Lステップ設定前の挙動確認にお使いください
        </p>

        <div className="space-y-4">
          <DevLinkRow
            label="①視聴可能"
            description="現時刻で発行したトークン（72時間以内）"
            url={validUrl}
          />
          <DevLinkRow
            label="②視聴期限切れ"
            description="4日前の日時で発行したトークン"
            url={expiredUrl}
          />
          <DevLinkRow
            label="③不正なURL"
            description="署名が一致しないトークン"
            url={invalidUrl}
          />
        </div>

        <div className="mt-8 pt-6 border-t border-silver">
          <h2 className="font-bold text-navy-600 mb-3">Lステップ連携の設定例</h2>
          <p className="text-xs text-text-soft leading-relaxed mb-3">
            Lステップで友だち追加時メッセージにこのフォーマットでURLを埋め込みます：
          </p>
          <pre className="bg-bg-tint p-3 rounded text-[11px] overflow-x-auto">
{`https://ad-ai-school.vercel.app/watch?t={{友だち追加日時 ISO形式}}&s={{署名}}`}
          </pre>
          <p className="text-[11px] text-text-light mt-3 leading-relaxed">
            ※ Lステップで「友だち追加日時」をISO形式で取得し、URLパラメータ <code>t</code> に挿入<br />
            ※ 署名 <code>s</code> はサーバー側のシークレット鍵で生成する必要があるため、Lステップから直接生成できない場合は Webhook API を別途用意するか、署名検証を緩めて「日時のみ」運用も可能
          </p>
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

import type { Metadata } from "next";
import { verifyDateParam } from "@/lib/token";
import { WEBINAR_TITLE } from "@/lib/constants";
import WatchPlayer from "@/components/WatchPlayer";
import WatchExpired from "@/components/WatchExpired";
import WatchInvalid from "@/components/WatchInvalid";
import WatchClient from "@/components/WatchClient";

export const metadata: Metadata = {
  title: `${WEBINAR_TITLE}｜AI広告起業スクール 無料ウェビナー`,
  description:
    "AI広告起業スクールの無料ウェビナー視聴ページ。ご登録から3日間限定で視聴いただけます",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ t?: string }>;

export default async function WatchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { t } = await searchParams;

  // パラメータが無い場合：Cookieベース運用にフォールバック
  // （連携前からの既存友だちへ手動一斉送信で配布したURLなど）
  if (!t) {
    return <WatchClient />;
  }

  // パラメータがある場合：配信日（YYYY/M/D）を起点に「登録日含めて3日間」を判定
  const result = verifyDateParam(t);

  if (result.status === "invalid") {
    return <WatchInvalid reason={result.reason} />;
  }

  if (result.status === "expired") {
    return (
      <WatchExpired lastViewableDate={result.lastViewableDate.toISOString()} />
    );
  }

  return (
    <WatchPlayer
      remainingMs={result.remainingMs}
      lastViewableDate={result.lastViewableDate.toISOString()}
    />
  );
}

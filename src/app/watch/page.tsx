import type { Metadata } from "next";
import { verifyToken } from "@/lib/token";
import { WEBINAR_TITLE } from "@/lib/constants";
import WatchPlayer from "@/components/WatchPlayer";
import WatchExpired from "@/components/WatchExpired";
import WatchInvalid from "@/components/WatchInvalid";

export const metadata: Metadata = {
  title: `${WEBINAR_TITLE}｜AI広告起業スクール 無料ウェビナー`,
  description:
    "AI広告起業スクールの無料ウェビナー視聴ページ。ご登録から3日間限定で視聴いただけます",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ t?: string; s?: string }>;

export default async function WatchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { t, s } = await searchParams;
  const result = verifyToken(t, s);

  if (result.status === "invalid") {
    return <WatchInvalid reason={result.reason} />;
  }

  if (result.status === "expired") {
    return <WatchExpired expiresAt={result.expiresAt} />;
  }

  return (
    <WatchPlayer
      remainingMs={result.remainingMs}
      expiresAt={result.expiresAt.toISOString()}
    />
  );
}

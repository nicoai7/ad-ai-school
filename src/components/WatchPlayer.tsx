"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Clock, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import {
  WEBINAR_TITLE,
  WEBINAR_YOUTUBE_ID,
  TAIKENKAI_URL,
} from "@/lib/constants";
import { trackEvent, trackCustomEvent, makeTrackingClickHandler } from "@/lib/pixel";
import WatchExpired from "./WatchExpired";

type Props = {
  // 視聴期限の絶対時刻（UNIXミリ秒）
  expiresAtMs: number;
  // 最終視聴日（ISO文字列）。表示は JST の日付で行う
  lastViewableDate: string;
};

// 現在時刻（ms）を1秒ごとに通知する外部ストア
function subscribeNow(callback: () => void): () => void {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}
function getNowSnapshot(): number {
  return Date.now();
}

// YouTube IFrame API type stub
type YTPlayer = { destroy?: () => void };
type YTPlayerStateChange = { data: number };
declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement | string,
        config: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: { onStateChange?: (e: YTPlayerStateChange) => void };
        }
      ) => YTPlayer;
      PlayerState: { ENDED: 0 };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function WatchPlayer({ expiresAtMs, lastViewableDate }: Props) {
  const now = useSyncExternalStore(
    subscribeNow,
    getNowSnapshot,
    getNowSnapshot
  );
  const [videoEnded, setVideoEnded] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  // ViewContent 発火（ページ到達計測）
  useEffect(() => {
    trackEvent("ViewContent", { content_name: "WebinarWatchPage" });
  }, []);

  // YouTube IFrame API setup
  useEffect(() => {
    if (WEBINAR_YOUTUBE_ID === "PLACEHOLDER_VIDEO_ID") return;
    if (!playerContainerRef.current) return;

    const initPlayer = () => {
      if (!playerContainerRef.current || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(playerContainerRef.current, {
        videoId: WEBINAR_YOUTUBE_ID,
        playerVars: {
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onStateChange: (event) => {
            // 0 = ENDED
            if (event.data === 0) {
              setVideoEnded(true);
              trackCustomEvent("WebinarWatchComplete");
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // API スクリプトを読み込み
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current?.destroy) {
        try {
          playerRef.current.destroy();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const remaining = expiresAtMs - now;

  // 視聴期限切れ
  if (remaining <= 0) {
    return <WatchExpired lastViewableDate={lastViewableDate} />;
  }

  const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
  const hours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));

  const expiresStr = new Date(lastViewableDate).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    timeZone: "Asia/Tokyo",
  });

  return (
    <main className="min-h-screen bg-soft pt-8 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="flex items-center justify-center gap-3 mb-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="h-px w-10 sm:w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gold-deep font-bold">
            AI AD FOUNDER SCHOOL
          </span>
          <span className="h-px w-10 sm:w-12 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.h1
          className="text-center text-xl sm:text-3xl md:text-4xl font-black text-navy-600 leading-tight mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {WEBINAR_TITLE}
        </motion.h1>

        <motion.p
          className="text-center text-xs sm:text-sm text-text-soft mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          AI広告起業スクール 無料ウェビナー
        </motion.p>

        <motion.div
          className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-silver/60 bg-navy-700 mb-6"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {WEBINAR_YOUTUBE_ID === "PLACEHOLDER_VIDEO_ID" ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-silver-soft p-6 text-center">
              <p className="text-base sm:text-lg font-bold mb-2">動画準備中</p>
              <p className="text-xs sm:text-sm text-silver">
                YouTubeにアップロード後、`WEBINAR_YOUTUBE_ID` を差し替えてください
              </p>
            </div>
          ) : (
            <div ref={playerContainerRef} className="w-full h-full" />
          )}
        </motion.div>

        <motion.div
          className="bg-white border border-silver/70 rounded-2xl p-5 sm:p-6 max-w-4xl mx-auto mb-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-text-soft">
              <Clock className="w-4 h-4 text-gold-deep" strokeWidth={2.5} />
              <div className="text-xs sm:text-sm">
                <span className="font-bold">視聴可能時間 </span>
                <span
                  className="font-black text-navy-600"
                  suppressHydrationWarning
                >
                  あと{days}日 {hours}時間 {minutes}分
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-text-soft">
              <Calendar className="w-4 h-4 text-gold-deep" strokeWidth={2.5} />
              <div className="text-xs sm:text-sm">
                <span className="font-bold">視聴期限 </span>
                <span className="font-bold text-navy-600">{expiresStr} まで</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 視聴完了後に表示される体験会セクション */}
        <AnimatePresence>
          {videoEnded && (
            <motion.section
              key="taikenkai"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-gradient-to-br from-navy-50 to-white border border-gold/60 rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto text-center shadow-xl relative"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-white font-black px-5 py-1.5 rounded-full text-[11px] sm:text-xs shadow-md whitespace-nowrap tracking-wide flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.5} />
                ウェビナー視聴完了
              </div>

              <p className="text-[10px] sm:text-xs tracking-widest text-gold-deep font-bold mt-3 mb-3">
                ご視聴ありがとうございました
              </p>
              <h2 className="text-lg sm:text-2xl font-black text-navy-600 leading-snug mb-3">
                ここまでご覧いただいたあなたへ
                <br />
                AI × 広告マーケ 無料体験会
              </h2>
              <p className="text-sm text-text-soft leading-relaxed mb-6">
                ウェビナーで紹介した
                <span className="font-black text-navy-600">「月商7桁を作る3ステップ」</span>
                を、あなたの状況に合わせて
                <br className="hidden sm:block" />
                プロのコンサルタントが個別に解説します
              </p>
              <a
                href={TAIKENKAI_URL}
                onClick={makeTrackingClickHandler(TAIKENKAI_URL, "InitiateCheckout", {
                  content_name: "TaikenkaiBooking",
                })}
                className="inline-flex items-center gap-2 bg-gradient-to-b from-navy-500 via-navy-600 to-navy-700 text-white font-black px-7 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg ring-2 ring-gold/80 shadow-lg hover:scale-105 transition-transform"
              >
                体験会を予約する
                <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
              </a>
              <p className="mt-4 text-[11px] sm:text-xs text-text-light">
                完全オンライン / 60〜90分 / 強引な勧誘なし
              </p>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

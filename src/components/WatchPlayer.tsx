"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock, Calendar, ExternalLink } from "lucide-react";
import {
  WEBINAR_TITLE,
  WEBINAR_YOUTUBE_ID,
  TAIKENKAI_URL,
} from "@/lib/constants";

type Props = {
  remainingMs: number;
  expiresAt: string;
};

export default function WatchPlayer({ remainingMs, expiresAt }: Props) {
  const [remaining, setRemaining] = useState(remainingMs);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => {
        const next = prev - 1000;
        if (next <= 0) {
          window.location.reload();
          return 0;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
  const hours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));

  const expiresDate = new Date(expiresAt);
  const expiresStr = expiresDate.toLocaleString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
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
              <p className="text-base sm:text-lg font-bold mb-2">
                動画準備中
              </p>
              <p className="text-xs sm:text-sm text-silver">
                YouTubeにアップロード後、`WEBINAR_YOUTUBE_ID` を差し替えてください
              </p>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${WEBINAR_YOUTUBE_ID}?rel=0&modestbranding=1`}
              title={WEBINAR_TITLE}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
                <span className="font-black text-navy-600">
                  あと{days}日 {hours}時間 {minutes}分
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-text-soft">
              <Calendar className="w-4 h-4 text-gold-deep" strokeWidth={2.5} />
              <div className="text-xs sm:text-sm">
                <span className="font-bold">視聴期限 </span>
                <span className="font-bold text-navy-600">{expiresStr}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-navy-50 to-white border border-silver/70 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-center shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[10px] sm:text-xs tracking-widest text-gold-deep font-bold mb-3">
            ウェビナー視聴者限定
          </p>
          <h2 className="text-lg sm:text-2xl font-black text-navy-600 leading-snug mb-3">
            AI × 広告マーケ 無料体験会
          </h2>
          <p className="text-sm text-text-soft leading-relaxed mb-5">
            ウェビナーで紹介した3ステップを、あなたの状況に合わせて
            <br className="hidden sm:block" />
            プロのコンサルタントが個別に解説します
          </p>
          <a
            href={TAIKENKAI_URL}
            className="inline-flex items-center gap-2 bg-gradient-to-b from-navy-500 via-navy-600 to-navy-700 text-white font-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base ring-2 ring-gold/80 shadow-lg hover:scale-105 transition-transform"
          >
            体験会を予約する
            <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </main>
  );
}

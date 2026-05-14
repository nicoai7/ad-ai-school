"use client";

import { motion } from "framer-motion";
import { Clock, ExternalLink, MessageCircle } from "lucide-react";
import { TAIKENKAI_URL, LINE_URL } from "@/lib/constants";

type Props = {
  // 最終視聴日（ISO文字列）。表示は JST の日付で行う
  lastViewableDate: string;
};

export default function WatchExpired({ lastViewableDate }: Props) {
  const expiresStr = new Date(lastViewableDate).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    timeZone: "Asia/Tokyo",
  });

  return (
    <main className="min-h-screen bg-soft flex items-center justify-center px-5 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="h-px w-10 sm:w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gold-deep font-bold">
            AI AD FOUNDER SCHOOL
          </span>
          <span className="h-px w-10 sm:w-12 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.div
          className="bg-white border border-silver/70 rounded-2xl p-8 sm:p-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-bg-soft border border-silver flex items-center justify-center">
            <Clock className="w-8 h-8 text-text-light" strokeWidth={2} />
          </div>

          <h1 className="text-xl sm:text-3xl font-black text-navy-600 leading-tight mb-3">
            視聴期限が終了しました
          </h1>

          <p className="text-sm text-text-soft mb-6">
            視聴期限：{expiresStr} まで
          </p>

          <div className="bg-bg-soft rounded-xl p-5 mb-8 text-left">
            <p className="text-sm text-text-main leading-relaxed">
              無料ウェビナー「AIで広告代理店を立ち上げて、月商7桁を作る3ステップ」の公開期限が終了しました
              ご視聴いただいた方、ありがとうございました
            </p>
          </div>

          <div className="border-t border-silver/60 pt-6 mb-6">
            <p className="text-[10px] sm:text-xs tracking-widest text-gold-deep font-bold mb-3">
              ウェビナーをご視聴いただいた方へ
            </p>
            <h2 className="text-lg sm:text-2xl font-black text-navy-600 leading-snug mb-3">
              AI × 広告マーケ 無料体験会
            </h2>
            <p className="text-sm text-text-soft leading-relaxed mb-5">
              ウェビナーで紹介した3ステップを、あなたの状況に合わせて
              実際にAIツールを動かしながら個別に解説します
            </p>
            <a
              href={TAIKENKAI_URL}
              className="inline-flex items-center gap-2 bg-gradient-to-b from-navy-500 via-navy-600 to-navy-700 text-white font-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base ring-2 ring-gold/80 shadow-lg hover:scale-105 transition-transform"
            >
              体験会を予約する
              <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>

          <div className="text-xs text-text-light leading-relaxed">
            <p className="mb-2">ご質問やご相談がある方は、</p>
            <a
              href={LINE_URL}
              className="inline-flex items-center gap-1 text-navy-600 font-bold hover:underline"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              公式LINEからメッセージをお送りください
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

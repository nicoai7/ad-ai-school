"use client";

import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";
import LineButton from "./LineButton";
import { LINE_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-soft pt-10 pb-14 sm:pt-16 sm:pb-20">
      <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-100px] left-[-80px] w-[320px] h-[320px] rounded-full bg-navy-100 blur-3xl blob-drift" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] rounded-full bg-gold-soft blur-3xl blob-drift" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-px w-10 sm:w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gold-deep font-bold">
            AI × AD × FOUNDER
          </span>
          <span className="h-px w-10 sm:w-12 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.div
          className="text-center mb-5 sm:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 bg-navy-600 text-silver-soft font-black px-4 py-1.5 rounded-full text-xs sm:text-sm tracking-wider">
            <Sparkles className="w-4 h-4 text-gold" strokeWidth={2.5} />
            AIで起業するなら、今がラストチャンス
          </span>
        </motion.div>

        <motion.h1
          className="text-center text-[26px] sm:text-5xl md:text-[56px] font-black leading-[1.3] tracking-tight text-navy-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="block text-sm sm:text-base text-text-soft font-bold tracking-widest mb-3">
            ＼ 未経験OK ／
          </span>
          AIで広告マーケを自動化し
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">3ヶ月で広告代理店</span>
            <span className="absolute left-0 right-0 -bottom-1 h-[5px] bg-pink-deep -z-0 rounded-sm" />
          </span>
          <br />
          を立ち上げる
        </motion.h1>

        <motion.p
          className="mt-6 text-center text-sm sm:text-lg text-text-soft leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          弊社独自開発の高品質マーケAI自動化ツール × プロによる個別コンサル付き
          <br className="hidden sm:block" />
          副業の枠を超え、<span className="font-black text-navy-600">本業として広告代理店を立ち上げる</span>ためのスクール
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-10 relative bg-white rounded-2xl border border-silver/80 shadow-[0_25px_50px_-20px_rgba(30,58,95,0.25)] p-6 sm:p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/70" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/70" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/70" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/70" />

          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-white font-black px-4 py-1.5 rounded-full text-[11px] sm:text-xs shadow-md whitespace-nowrap tracking-wide flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5" strokeWidth={2.5} />
            LINE登録者限定 無料プレゼント
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs sm:text-sm text-text-soft mb-2">
              コピペするだけで配信可能
            </p>
            <h2 className="text-base sm:text-2xl font-black text-navy-600 leading-tight">
              すぐに使える広告バナーを作成できる
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">ChatGPT Image2 プロンプト集 30選</span>
                <span className="absolute left-0 right-0 -bottom-1 h-[5px] bg-pink-deep -z-0 rounded-sm" />
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg font-black text-text-main">
              🎁プレゼント中！🎁
            </p>
            <div className="gold-divider my-4">
              <span className="text-[10px]">✦</span>
            </div>
            <p className="text-xs sm:text-sm text-text-soft leading-relaxed">
              10業種 × 3パターン｜業種別の訴求軸・トーン・想定CTR付き
            </p>
          </div>

          <p className="mt-6 text-center text-lg sm:text-2xl font-black text-navy-600 leading-snug">
            無料ウェビナーで
            <br className="sm:hidden" />
            <span className="text-pink-deep">月商7桁を作る3ステップ</span>
            を完全公開
          </p>

          <div className="mt-4 flex justify-center">
            <LineButton href={LINE_URL} size="lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

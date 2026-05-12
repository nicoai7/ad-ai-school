"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import LineButton from "./LineButton";
import { LINE_URL, SCHOOL_NAME } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 bg-soft relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full bg-navy-100 blur-3xl blob-drift" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[340px] h-[340px] rounded-full bg-gold-soft blur-3xl blob-drift" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gold-deep font-bold">
            FREE WEBINAR
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-4xl font-black leading-tight mb-5 text-navy-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          未経験から3ヶ月で
          <br className="sm:hidden" />
          広告代理店を立ち上げる
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base text-text-soft leading-relaxed mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {SCHOOL_NAME}の無料ウェビナーで、AIで広告マーケを自動化する仕組みと、
          <br className="hidden sm:block" />
          受講生が2ヶ月目で月商100万円を達成した再現可能なモデルをすべて公開します
        </motion.p>

        <motion.div
          className="relative bg-white rounded-2xl border border-silver/80 shadow-[0_25px_50px_-20px_rgba(30,58,95,0.25)] p-6 sm:p-8 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/70" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/70" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/70" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/70" />

          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-white font-black px-4 py-1.5 rounded-full text-[11px] sm:text-xs shadow-md whitespace-nowrap tracking-wide flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5" strokeWidth={2.5} />
            LINE登録者限定 無料プレゼント
          </div>

          <div className="pt-3 text-center">
            <p className="text-xs sm:text-sm text-text-soft mb-2">
              コピペするだけで配信可能
            </p>
            <h3 className="text-base sm:text-xl font-black text-navy-600 leading-tight">
              すぐに使える広告バナーを作成できる
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">ChatGPT Image2 プロンプト集 30選</span>
                <span className="absolute left-0 right-0 -bottom-1 h-[5px] bg-pink-deep -z-0 rounded-sm" />
              </span>
            </h3>
            <p className="mt-3 text-base sm:text-lg font-black text-text-main">
              🎁プレゼント中！🎁
            </p>
            <p className="text-xs sm:text-sm text-text-soft mt-2 leading-relaxed">
              10業種 × 3パターン｜業種別の訴求軸・トーン・想定CTR付き
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <LineButton href={LINE_URL} size="lg" />
        </motion.div>
      </div>

      <footer className="relative z-10 mt-16 pt-8 border-t border-silver/60 text-center text-xs text-text-light">
        <p>© {SCHOOL_NAME}</p>
        <p className="mt-2">
          スクール内容・受講料の詳細はLINE登録後にご案内いたします
        </p>
      </footer>
    </section>
  );
}

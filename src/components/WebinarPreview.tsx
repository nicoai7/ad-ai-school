"use client";

import { motion } from "framer-motion";
import { PlayCircle, CheckCircle2 } from "lucide-react";

const points = [
  "1人法人でAI広告代理店を立ち上げる具体的な手順",
  "弊社独自開発の高品質AIマーケ自動化ツールの活用方法",
  "受講生が実践した月商7桁を実現する3ステップの全容",
  "未経験から3ヶ月で広告代理店を立ち上げるロードマップ",
];

export default function WebinarPreview() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-flex items-center gap-2 bg-navy-50 text-navy-600 font-bold rounded-full px-4 py-1.5 text-[11px] sm:text-xs mb-4 tracking-wider">
            <PlayCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
            無料ウェビナーで得られること
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            たった
            <span className="relative inline-block">
              <span className="relative z-10">1本のウェビナー</span>
              <span className="absolute left-0 right-0 -bottom-1 h-[5px] bg-pink-deep -z-0 rounded-sm" />
            </span>
            で
            <br />
            広告代理店起業の全体像が分かる
          </h2>
        </motion.div>

        <motion.div
          className="relative bg-gradient-to-br from-navy-50 to-white border border-silver/70 rounded-2xl p-6 sm:p-10 shadow-[0_25px_50px_-20px_rgba(30,58,95,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/70" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/70" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/70" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/70" />

          <div className="text-center mb-6 sm:mb-8">
            <p className="text-[10px] sm:text-xs text-gold-deep tracking-[0.3em] font-bold mb-3">
              FREE WEBINAR TITLE
            </p>
            <h3 className="text-lg sm:text-2xl font-black text-navy-600 leading-snug">
              1人法人×AIで広告代理店を立ち上げ、
              <br className="sm:hidden" />
              月商7桁を作る3ステップ
            </h3>
          </div>

          <div className="gold-divider mb-6 sm:mb-8">
            <span className="text-[10px]">✦</span>
          </div>

          <ul className="space-y-3 max-w-2xl mx-auto">
            {points.map((p, i) => (
              <motion.li
                key={p}
                className="flex items-start gap-3 text-sm sm:text-base text-text-main"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <CheckCircle2
                  className="w-5 h-5 sm:w-6 sm:h-6 text-pink-deep flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="leading-relaxed">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

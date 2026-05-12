"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "1.3",
    unit: "兆円",
    label: "日本のSNS広告市場規模",
    sub: "2025年・前年比+18.7%の2桁成長",
  },
  {
    number: "65",
    unit: "万社+",
    label: "Meta広告利用企業数（日本）",
    sub: "中小企業の運用代行需要が急増中",
  },
  {
    number: "20",
    unit: "%",
    label: "運用代行手数料の相場",
    sub: "月10万円の手数料設定が一般的",
  },
];

export default function Market() {
  return (
    <section className="py-14 sm:py-20 bg-soft relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-50">
        <div className="absolute top-10 right-[-100px] w-[300px] h-[300px] rounded-full bg-navy-100 blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-block bg-navy-500 text-white font-bold rounded-full px-4 py-1.5 text-[11px] sm:text-xs mb-4 tracking-wider">
            市場データで見る
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            Meta広告市場は
            <br className="sm:hidden" />
            <span className="text-navy-500">今が完全に分岐点</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-soft">
            広告代理店業界が変わるタイミングに、起業の波が来ています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-silver/70 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex items-end justify-center gap-1 mb-3">
                <span className="text-5xl sm:text-6xl font-black text-navy-500 leading-none">
                  {s.number}
                </span>
                <span className="text-lg sm:text-xl font-black text-navy-500 pb-1">
                  {s.unit}
                </span>
              </div>
              <div className="font-black text-text-main text-sm sm:text-base mb-2">
                {s.label}
              </div>
              <div className="text-xs text-text-soft leading-relaxed">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 bg-white rounded-2xl p-5 sm:p-7 border-l-4 border-gold shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base text-text-main leading-relaxed">
            <span className="font-black text-navy-600">大事なポイント：</span>
            Meta広告はAI自動運用（Advantage+）の精度が飛躍的に向上し、
            <span className="relative inline-block font-black">
              <span className="relative z-10">「AIを使いこなす代理店」</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-[4px] bg-pink-deep -z-0 rounded-sm" />
            </span>
            が圧倒的に有利な時代に入りました
          </p>
        </motion.div>
      </div>
    </section>
  );
}

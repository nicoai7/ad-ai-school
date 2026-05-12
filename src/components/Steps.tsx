"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "STEP 01",
    title: "AI自動化ツールを使い倒す",
    body: "弊社開発マーケAIツールに慣れる。ボタン操作レベルで、広告制作・運用・レポート作成まで完結できる状態を作る",
  },
  {
    step: "STEP 02",
    title: "営業は人間が実施",
    body: "AI生成の営業文や提案資料を「型」として使いつつ、商談・クロージングは自分が行う。信頼関係づくりは人にしかできない仕事",
  },
  {
    step: "STEP 03",
    title: "月商を積み上げる",
    body: "1社あたり月10万円の継続案件を積み重ねる。AIが運用するから、1人でも10社以上を無理なく回せる",
  },
];

export default function Steps() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="inline-block bg-navy-50 text-navy-600 font-bold rounded-full px-4 py-1.5 text-[11px] sm:text-xs mb-4 tracking-wider">
            3ヶ月で広告代理店を立ち上げるロードマップ
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            たった3ステップで
            <br className="sm:hidden" />
            広告代理店として独立
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          <div className="hidden md:block absolute top-[60px] left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-gold/20 via-gold to-gold/20 -z-0" />
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative bg-white border border-silver/70 rounded-2xl p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="relative z-10 mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center text-gold font-black text-xl mb-4 shadow-md ring-4 ring-white">
                {i + 1}
              </div>
              <div className="text-xs text-gold-deep tracking-[0.3em] font-bold mb-2">
                {s.step}
              </div>
              <h3 className="font-black text-base sm:text-lg text-navy-600 leading-snug mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

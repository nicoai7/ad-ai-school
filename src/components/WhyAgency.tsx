"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    no: "01",
    title: "需要が圧倒的に高い",
    body: "中小企業65万社以上がMeta広告を活用。「広告運用を任せたい」という相談は今この瞬間も止まらず発生している",
  },
  {
    no: "02",
    title: "成果が数字で見える",
    body: "CPA・CTR・CVRなど、すべての成果が数字で可視化される業界。クライアントへの提供価値を明確に示しやすい",
  },
  {
    no: "03",
    title: "月額継続型ストック収益",
    body: "1件契約すれば、毎月安定して売上が積み上がる。継続契約ベースなので翌月の売上が読める事業構造",
  },
  {
    no: "04",
    title: "在庫・初期費用ほぼゼロ",
    body: "商品開発も、オフィスも、在庫もいらない。PC1台と契約書があれば、今日からでも事業として始められる",
  },
];

export default function WhyAgency() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-block bg-gold text-silver-soft font-black rounded-full px-4 py-1.5 text-[11px] sm:text-xs mb-4 tracking-wider">
            なぜ「広告代理店」が起業に最適なのか
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            広告運用は
            <span className="relative inline-block">
              <span className="relative z-10">需要が高く、成果が見える</span>
              <span className="absolute left-0 right-0 -bottom-1 h-[5px] bg-pink-deep -z-0 rounded-sm" />
            </span>
            <br />
            起業に最適なジャンル
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.no}
              className="relative bg-gradient-to-br from-navy-50 to-white rounded-2xl p-6 border border-silver/70"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="absolute -top-3.5 -left-1 bg-navy-600 text-silver-soft font-black rounded-lg px-3 py-1 text-sm shadow-md tracking-wider">
                {r.no}
              </div>
              <h3 className="font-black text-base sm:text-lg text-navy-600 leading-snug mb-2 mt-3">
                {r.title}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

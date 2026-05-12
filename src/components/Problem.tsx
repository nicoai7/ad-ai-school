"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "広告代理店を立ち上げたいが、専門知識がなくて踏み出せない",
  "副業ではなく、本業として独立できる事業を立ち上げたい",
  "在庫を持たず、月額継続型の収益モデルで事業を作りたい",
  "AIで稼ぐ方法を学びたいが、どのようにAIを活用したらいいか分からない",
];

export default function Problem() {
  return (
    <section className="py-14 sm:py-20 bg-tint">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-block bg-navy-600 text-silver-soft font-bold rounded-full px-4 py-1.5 text-[11px] sm:text-xs mb-4 tracking-wider">
            こんなお悩みありませんか
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            広告代理店は需要が高いが
            <br />
            <span className="text-pink-deep">専門性の壁で諦めている人が多い</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-soft leading-relaxed max-w-2xl mx-auto">
            広告運用は中小企業からの相談が止まらず、起業ジャンルとしては最適です
            <br />
            ですが、専門性の習得ハードルで多くの人が踏み出せていません
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl border border-silver/70 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-3">
            {items.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-3 text-sm sm:text-base text-text-main"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="flex-shrink-0 w-6 h-6 bg-gold/15 border border-gold/50 rounded-md flex items-center justify-center text-gold-deep">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg sm:text-2xl font-black text-navy-600">
            ひとつでも当てはまったら、
            <span className="text-pink-deep">読み進めてください</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

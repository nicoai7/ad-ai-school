"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, X } from "lucide-react";

export default function NotJustSideHustle() {
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
          <p className="inline-block bg-navy-600 text-gold font-bold rounded-full px-4 py-1.5 text-[11px] sm:text-xs mb-4 tracking-wider">
            副業ではなく、起業として始める
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            副業の枠を超え、
            <br className="sm:hidden" />
            <span className="text-pink-deep">収益に上限はなくなる</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-soft leading-relaxed max-w-2xl mx-auto">
            AI副業スクールは多数ありますが、「副業で稼げる範囲」で頭打ちになるのが現実
            <br />
            起業して自分の事業として立ち上げれば、やればやるだけ本業として伸ばせます
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-7 border border-silver shadow-sm relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-silver-soft flex items-center justify-center">
                <X className="w-5 h-5 text-text-light" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] text-text-light tracking-widest font-bold">A CASE</p>
                <h3 className="text-base sm:text-lg font-black text-text-soft">
                  AI副業として取り組む
                </h3>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-text-soft leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-text-light mt-0.5">―</span>
                月収数万円〜10万円程度で頭打ち
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-light mt-0.5">―</span>
                本業の時間が取られて疲弊しやすい
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-light mt-0.5">―</span>
                スケールしないため、収入が安定しない
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl p-6 sm:p-7 shadow-xl text-white relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
            <div className="flex items-center gap-3 mb-4 relative">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-navy-700" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] text-gold tracking-widest font-bold">B CASE</p>
                <h3 className="text-base sm:text-lg font-black text-white">
                  広告代理店として起業
                </h3>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-navy-50 leading-relaxed relative">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>月商100万円・300万円と、収益に上限なく伸ばせる</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>月額継続契約だから売上が積み上がる</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>事業資産として価値が残る</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 sm:mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-base sm:text-xl font-black text-navy-600 leading-relaxed">
            やればやるだけ伸びる
            <br className="sm:hidden" />
            <span className="text-pink-deep">「本業として稼げる事業」</span>
            を作りましょう
          </p>
        </motion.div>
      </div>
    </section>
  );
}

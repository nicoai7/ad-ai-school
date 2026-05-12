"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock } from "lucide-react";
import LineButton from "./LineButton";
import { LINE_URL } from "@/lib/constants";

export default function Urgency() {
  return (
    <section className="py-14 sm:py-20 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none opacity-30">
        <div className="absolute top-[-80px] left-[-50px] w-[300px] h-[300px] rounded-full bg-silver/20 blur-3xl blob-drift" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full bg-silver/15 blur-3xl blob-drift" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          className="inline-flex items-center gap-2 bg-silver/15 border border-silver/50 text-silver-soft rounded-full px-4 py-2 mb-6 text-xs sm:text-sm font-bold tracking-wider"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <AlertTriangle className="w-4 h-4" strokeWidth={2.5} />
          IMPORTANT
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-5xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          AIで起業するのは
          <br />
          <span className="text-silver-soft">今がラストチャンス</span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-lg text-silver leading-relaxed mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          AIを使いこなす代理店が市場を席巻する前に
          <br className="hidden sm:block" />
          先行者として「AI×広告代理店」のポジションを取りに行ける時期は、あと数ヶ月かもしれません
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 text-silver-soft text-xs sm:text-sm font-bold mb-8 tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Clock className="w-4 h-4" strokeWidth={2.5} />
          無料ウェビナーは予告なく終了する可能性があります
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <LineButton href={LINE_URL} size="lg" />
        </motion.div>
      </div>
    </section>
  );
}

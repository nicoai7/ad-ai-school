"use client";

import { motion } from "framer-motion";
import { Megaphone, FileText, MessageCircle, Handshake } from "lucide-react";

const points = [
  {
    no: "01",
    Icon: Megaphone,
    title: "Meta広告の運用",
    body: "AIツールに任せて、ターゲット分析・コピー生成・バナー制作・運用最適化まで一気通貫で実行できる実践スキル",
  },
  {
    no: "02",
    Icon: FileText,
    title: "LP制作",
    body: "成果が出るLPの構造・コピー設計・実装まで、AIで効率化しながらクライアントに納品レベルで仕上げる方法",
  },
  {
    no: "03",
    Icon: MessageCircle,
    title: "公式LINE構築",
    body: "登録動線・リッチメニュー・ステップ配信まで、CRM視点で「資産化する公式LINE」を設計するノウハウ",
  },
  {
    no: "04",
    Icon: Handshake,
    title: "営業ノウハウ",
    body: "商談・クロージング・関係構築など、AIに任せられない「人がやるべき営業の型」。クライアント獲得のノウハウを体系的に学ぶ",
  },
];

export default function LearnPoints() {
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
          <p className="inline-block bg-navy-50 text-navy-600 font-bold rounded-full px-4 py-1.5 text-[11px] sm:text-xs mb-4 tracking-wider">
            本スクールで学べる4つの実務スキル
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            広告代理店として独立するために
            <br className="sm:hidden" />
            <span className="relative inline-block">
              <span className="relative z-10">必要なすべてが揃う</span>
              <span className="absolute left-0 right-0 -bottom-1 h-[5px] bg-pink-deep -z-0 rounded-sm" />
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-soft leading-relaxed max-w-2xl mx-auto">
            広告マーケティングのプロによる個別コンサルティング付き
            <br className="hidden sm:block" />
            Meta広告だけでなく、LP制作・公式LINE構築・営業の仕方まで体系的に習得できます
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.no}
              className="relative bg-white border border-silver/70 rounded-2xl p-6 shadow-[0_15px_30px_-15px_rgba(30,58,95,0.2)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center shadow-md">
                  <p.Icon className="w-7 h-7 text-gold" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="text-gold-deep font-black text-sm tracking-[0.25em] mb-1">
                    {p.no}
                  </div>
                  <h3 className="font-black text-base sm:text-lg text-navy-600 leading-snug mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-soft leading-relaxed">{p.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

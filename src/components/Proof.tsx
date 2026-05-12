"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Proof() {
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
            受講生事例
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            受講から
            <span className="relative inline-block">
              <span className="relative z-10">2ヶ月で月商100万円</span>
              <span className="absolute left-0 right-0 -bottom-1 h-[5px] bg-pink-deep -z-0 rounded-sm" />
            </span>
            到達！
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-soft leading-relaxed max-w-2xl mx-auto">
            運用手数料1社あたり月10万円に設定し、10社のクライアントを獲得
            <br />
            すべて月額継続契約のため、翌月以降も安定した売上を積み上げています
          </p>
        </motion.div>

        <motion.div
          className="relative bg-bg-soft rounded-2xl p-6 sm:p-10 border border-silver/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Quote
            className="absolute top-6 left-6 w-10 h-10 text-gold/30"
            strokeWidth={1.5}
          />
          <div className="pl-14 sm:pl-16">
            <h3 className="font-black text-lg sm:text-2xl text-navy-600 mb-4">
              この受講生が早く立ち上がれた3つの理由
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-text-main leading-relaxed">
              <p>
                <span className="font-black text-navy-600">理由1｜クライアント獲得の作業をAIで自動化</span>
                <br />
                リスト抽出・アプローチ文・提案資料のたたきを、弊社開発マーケAIツールで生成
                作業時間を10分の1に圧縮できたことで、商談に集中する時間が確保できた
              </p>
              <p>
                <span className="font-black text-navy-600">理由2｜営業は人間が責任を持って実施</span>
                <br />
                ツールに任せきりではなく、商談・クロージングは自分で対応
                信頼関係づくりに集中することで、契約率が大きく上がった
              </p>
              <p>
                <span className="font-black text-navy-600">理由3｜単価設計を「中小企業に届く価格」で設計</span>
                <br />
                単価は受講生が自身で決定。この方は中小企業でも稟議が通りやすい価格帯を狙って設計
                AIで運用するから、無理のない単価でも十分利益が出る構造になっています
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-6 text-center text-xs sm:text-sm text-text-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ※成果は受講生個別の取組みによる事例であり、すべての受講生に同等の成果を保証するものではありません
        </motion.p>
      </div>
    </section>
  );
}

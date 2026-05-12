"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Layers, Sparkles } from "lucide-react";

const features = [
  {
    Icon: Cpu,
    title: "GAFAMレベル開発体制",
    body: "世界最大級クラウドプラットフォームのAI基盤設計担当エンジニアと共同開発。一般的なAIラッパーツールとは設計思想から別物",
  },
  {
    Icon: ShieldCheck,
    title: "エンタープライズセキュリティ",
    body: "クライアントの広告アカウント情報・顧客データを扱う前提で、業務利用に耐える水準のセキュリティを最初から組み込んだ設計",
  },
  {
    Icon: Layers,
    title: "マルチモーダル統合",
    body: "テキスト・画像・データ分析を1つの流れで処理。広告コピー・バナー・運用レポートまで一気通貫で出力できる現場仕様",
  },
];

export default function Solution() {
  return (
    <section className="py-14 sm:py-20 bg-soft">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-block bg-navy-500 text-white font-bold rounded-full px-4 py-1.5 text-[11px] sm:text-xs mb-4 tracking-wider">
            専門性の壁を、AIで突破する
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            弊社独自開発の
            <br className="sm:hidden" />
            <span className="text-pink-deep">高品質マーケAI自動化ツール</span>
            <br />
            が利用できる
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-soft leading-relaxed max-w-2xl mx-auto">
            スクール受講中は、本来高額な弊社開発ツールを利用可能
            <br className="hidden sm:block" />
            専門知識ゼロでも、広告代理店として品質の高い運用ができる仕組みになっています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg border border-silver/70"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center shadow-md mb-4">
                <f.Icon className="w-6 h-6 text-gold" strokeWidth={2} />
              </div>
              <h3 className="font-black text-base sm:text-lg text-navy-600 leading-snug mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 sm:mt-14 relative bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-gold/60"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-white font-black px-5 py-1.5 rounded-full text-[11px] sm:text-xs shadow-md whitespace-nowrap tracking-wide flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
            他社では再現できない最高品質
          </div>
          <h3 className="font-black text-lg sm:text-2xl text-navy-600 leading-snug mb-4 mt-2 text-center">
            このツールがあれば、
            <br className="sm:hidden" />
            専門知識ゼロでも代理店設立が可能
          </h3>
          <p className="text-sm sm:text-base text-text-soft leading-relaxed text-center max-w-2xl mx-auto">
            数千時間のエンジニアリング工数をかけて開発した本格仕様のマーケティングAIを、スクール受講者だけが利用できます
            個別コンサルと組み合わせることで、未経験からでも品質の高い広告運用が現実的に可能になります
          </p>
        </motion.div>
      </div>
    </section>
  );
}

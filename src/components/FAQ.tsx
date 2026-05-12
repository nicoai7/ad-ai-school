"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  {
    q: "AIや広告の知識がまったくありませんが、大丈夫ですか",
    a: "問題ありません。本スクールは未経験から3ヶ月で広告代理店を立ち上げることを前提に設計されています。弊社開発のAIマーケティング自動化ツールはボタン操作レベルで使え、専門用語や数値の見方も個別コンサルで一緒に身につけていきます",
  },
  {
    q: "副業として始められますか",
    a: "可能です。受講中は本業と並行して進められる設計にしていますが、本スクールの本質的なゴールは「副業」ではなく「事業として広告代理店を立ち上げる」ことです。やればやるだけ収益に上限なく伸ばせる、本業レベルで稼げる事業を一緒に作っていきます",
  },
  {
    q: "公式LINEに登録すると、何が届きますか",
    a: "登録特典として、コピペするだけですぐに配信可能な広告バナーを作成できる「GPT image2 プロンプト集30選」（10業種×3パターン、想定CTR付き）を即時お渡しします。あわせて、無料ウェビナーのご案内と、AI×広告マーケの最新情報を不定期で配信します",
  },
  {
    q: "登録後、しつこい営業や課金はありますか",
    a: "ありません。LINEはいつでも解除できますし、無料プレゼントの受け取りだけでも歓迎です。スクールのご案内は、ご興味のある方にだけ任意でお送りします",
  },
  {
    q: "スクールの料金体系・受講形式を知りたいです",
    a: "料金プラン・受講形式・カリキュラム詳細は、無料ウェビナー視聴後に個別にご案内しています。まずはLINE登録のうえ、無料ウェビナーをご視聴ください",
  },
  {
    q: "弊社開発のAIツールはどんなものですか",
    a: "GAFAMレベルの大手外資IT企業に所属するAIエンジニアと共同開発した、業務利用に耐えるエンタープライズ水準のマーケティング自動化ツールです。広告クリエイティブ生成・LP構造設計・運用レポートまでマルチモーダルで一気通貫処理ができ、スクール受講中はこれを無償で利用いただけます",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="inline-block bg-navy-50 text-navy-600 font-bold rounded-full px-4 py-1.5 text-[11px] sm:text-xs mb-4 tracking-wider">
            よくあるご質問
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-600 leading-tight">
            FAQ
          </h2>
        </motion.div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                className="bg-white border border-silver/70 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-3 text-left p-4 sm:p-5 hover:bg-bg-soft transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-navy-600 text-gold rounded-md flex items-center justify-center font-black text-sm">
                      Q
                    </span>
                    <span className="text-sm sm:text-base font-bold text-navy-600 leading-snug pt-1">
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border border-silver text-text-soft flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-gold/10 border-gold/50 text-gold-deep" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <Plus className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-4 sm:px-5 pb-5 pt-1 border-t border-silver/50"
                  >
                    <div className="flex items-start gap-3 pt-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-gold/15 text-gold-deep rounded-md flex items-center justify-center font-black text-sm">
                        A
                      </span>
                      <p className="text-sm text-text-main leading-relaxed pt-1">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

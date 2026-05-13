"use client";

import { motion } from "framer-motion";
import { AlertTriangle, MessageCircle } from "lucide-react";
import { LINE_URL } from "@/lib/constants";

type Props = {
  reason: string;
};

export default function WatchInvalid({ reason }: Props) {
  return (
    <main className="min-h-screen bg-soft flex items-center justify-center px-5 py-12">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          className="bg-white border border-silver/70 rounded-2xl p-8 sm:p-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-bg-soft border border-silver flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-text-light" strokeWidth={2} />
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-navy-600 leading-tight mb-3">
            視聴URLが無効です
          </h1>

          <p className="text-sm text-text-soft mb-6 leading-relaxed">
            URLが正しくないか、有効期限が切れている可能性があります
          </p>

          <p className="text-xs text-text-light mb-8">
            理由：{reason}
          </p>

          <div className="border-t border-silver/60 pt-6">
            <p className="text-sm text-text-main mb-4">
              視聴URLは、公式LINEからのメッセージにてお送りしています
            </p>
            <a
              href={LINE_URL}
              className="inline-flex items-center gap-2 bg-gradient-to-b from-navy-500 to-navy-700 text-white font-black px-6 py-3 rounded-full text-sm ring-2 ring-gold/80 shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
              公式LINEを確認する
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

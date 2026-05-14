"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { LINE_URL, SCHOOL_NAME } from "@/lib/constants";
import { makeTrackingClickHandler } from "@/lib/pixel";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-silver/60 shadow-sm"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-navy-500 to-navy-700 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-gold font-black text-sm sm:text-base">AI</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] text-text-light tracking-[0.2em] font-bold">
              AI AD FOUNDER SCHOOL
            </span>
            <span className="text-xs sm:text-base font-black text-navy-600 leading-tight">
              {SCHOOL_NAME}
            </span>
          </div>
        </a>

        <a
          href={LINE_URL}
          onClick={makeTrackingClickHandler(LINE_URL, "Lead", {
            content_name: "LineRegister_Header",
          })}
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-b from-navy-500 to-navy-700 text-white font-black text-xs sm:text-sm rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-[0_4px_12px_-2px_rgba(30,58,95,0.5),inset_0_-2px_0_rgba(0,0,0,0.22)] ring-1 ring-gold/60 hover:scale-105 transition-transform whitespace-nowrap"
        >
          <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold" strokeWidth={2} />
          <span className="hidden sm:inline">無料ウェビナーを視聴</span>
          <span className="sm:hidden">無料視聴</span>
        </a>
      </div>
    </motion.header>
  );
}

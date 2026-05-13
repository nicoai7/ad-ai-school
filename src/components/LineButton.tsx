"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { CTA_LABEL } from "@/lib/constants";
import { trackEvent } from "@/lib/pixel";

type Props = {
  href?: string;
  label?: string;
  size?: "lg" | "md";
  subLabel?: string;
};

export default function LineButton({
  href = "#",
  label = CTA_LABEL,
  size = "lg",
  subLabel = "",
}: Props) {
  const sizeClass =
    size === "lg"
      ? "px-7 sm:px-10 py-5 sm:py-6"
      : "px-6 py-4";

  return (
    <div className="flex flex-col items-center w-full">
      <motion.a
        href={href}
        onClick={() => trackEvent("Lead", { content_name: "LineRegister_CTA" })}
        className={`relative overflow-hidden inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-b from-navy-500 via-navy-600 to-navy-700 text-white font-black tracking-wide ring-2 ring-gold/80 ${sizeClass} max-w-full text-center leading-tight`}
        style={{
          boxShadow:
            "0 20px 40px -10px rgba(30, 58, 95, 0.55), 0 0 0 4px rgba(255, 255, 255, 0.95), 0 0 0 6px rgba(201, 162, 75, 0.55), inset 0 -5px 0 rgba(0, 0, 0, 0.22), inset 0 2px 0 rgba(255, 255, 255, 0.18)",
          textShadow: "0 1px 0 rgba(0, 0, 0, 0.25)",
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 -left-1/2 h-full w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine"
        />
        <PlayCircle
          className="relative z-10 w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 text-gold drop-shadow-sm"
          strokeWidth={2}
        />
        <span
          className={`relative z-10 leading-snug max-w-[18em] ${
            size === "lg" ? "text-xl sm:text-3xl" : "text-base sm:text-lg"
          }`}
        >
          {label}
        </span>
      </motion.a>
      {subLabel && (
        <p className="mt-3.5 text-[11px] sm:text-xs text-text-light text-center tracking-wide leading-relaxed">
          {subLabel}
        </p>
      )}
    </div>
  );
}

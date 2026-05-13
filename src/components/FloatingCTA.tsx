"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";
import { LINE_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/pixel";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: show ? 0 : 100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gradient-to-t from-white via-white/95 to-white/0 backdrop-blur-sm pt-6 pb-3 px-4 pointer-events-auto">
        <div className="max-w-md mx-auto">
          <motion.a
            href={LINE_URL}
            onClick={() => trackEvent("Lead", { content_name: "LineRegister_Floating" })}
            className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-navy-500 via-navy-600 to-navy-700 text-white font-black tracking-wide ring-2 ring-gold/80 px-5 py-4 text-sm sm:text-base"
            style={{
              boxShadow:
                "0 15px 30px -8px rgba(30, 58, 95, 0.55), 0 0 0 3px rgba(255, 255, 255, 0.95), 0 0 0 5px rgba(201, 162, 75, 0.55), inset 0 -4px 0 rgba(0, 0, 0, 0.22), inset 0 2px 0 rgba(255, 255, 255, 0.18)",
              textShadow: "0 1px 0 rgba(0, 0, 0, 0.25)",
            }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 -left-1/2 h-full w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine"
            />
            <PlayCircle className="relative z-10 w-5 h-5 flex-shrink-0 text-gold" strokeWidth={2} />
            <span className="relative z-10">無料ウェビナーを視聴する</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

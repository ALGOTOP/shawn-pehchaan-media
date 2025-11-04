import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useInView from "../utils/useInView.js";

const headingVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.2, 0.9, 0.2, 1] } })
};

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.12 });

  useEffect(() => {
    // gentle floating via CSS class plus a small framer nudge if visible
  }, [inView]);

  return (
    <header ref={ref} className="relative min-h-[78vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-1)] to-[var(--brand-2)] opacity-10 pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10 flex items-center gap-8">
        <div className="w-full max-w-2xl">
          <motion.div initial="hidden" animate={inView ? "show" : "hidden"}>
            <motion.div variants={headingVariants} custom={0}>
              <div className="text-sm mb-4 opacity-75">Full-service agency · Global</div>
            </motion.div>

            <motion.h1 className="text-6xl lg:text-7xl font-extrabold leading-tight" style={{ lineHeight: 0.98 }}>
              <motion.span variants={headingVariants} custom={1} className="block">
                We build identities that{" "}
                <motion.span variants={headingVariants} custom={2} className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)]">
                  resonate
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p variants={headingVariants} custom={3} className="mt-6 max-w-xl opacity-80">
              Pehchaan Media — strategy, creative, and technical production. We craft brand systems, films, and experiences for global audiences.
            </motion.p>

            <motion.div className="mt-8 flex gap-4" variants={headingVariants} custom={4}>
              <motion.a whileHover={{ scale: 1.02 }} className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-1 to-brand-2" href="#">Our Work</motion.a>
              <motion.a whileHover={{ scale: 1.02 }} className="px-6 py-3 rounded-lg bg-[rgba(255,255,255,0.035)]" href="#">Contact</motion.a>
            </motion.div>
          </motion.div>
        </div>

        <div className="hidden lg:block w-1/2 relative">
          <motion.div
            id="hero-blob"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
            className="w-full h-[380px] rounded-3xl overflow-hidden relative animate-float"
            style={{ transformOrigin: "center" }}
          >
            {/* SVG blob as before (keeps visual but can be swapped with Lottie later) */}
            <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden>
              <defs>
                <radialGradient id="blobGrad" cx="50%" cy="40%">
                  <stop offset="0%" stopColor="var(--accent-1)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--brand-2)" stopOpacity="0.8" />
                </radialGradient>
              </defs>
              <g transform="translate(50,20)">
                <path d="M60 260 C110 120 260 80 380 120 C520 170 640 220 700 300 C760 380 720 430 620 440 C520 450 420 420 300 420 C180 420 30 380 60 260 Z"
                  fill="url(#blobGrad)" opacity="0.98"></path>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

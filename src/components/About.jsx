import React from "react";
import { motion } from "framer-motion";
import useInView from "../utils/useInView.js";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.18 });

  return (
    <main ref={ref} className="min-h-screen flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="max-w-4xl p-8">
          <h1 className="text-4xl font-semibold mb-4">About Pehchaan Media</h1>
          <p className="opacity-80">Agency description placeholder — replace with real copy. The video shows animated split sections: this area can be styled the same by copying the Hero's gradient variables and SVG masks.</p>
        </div>
      </motion.div>
    </main>
  );
}

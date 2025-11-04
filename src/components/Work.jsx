import React from "react";
import { motion } from "framer-motion";
import useInView from "../utils/useInView.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2,0.9,0.2,1] } } };

export default function Work() {
  const [ref, inView] = useInView({ threshold: 0.12 });
  const projects = Array.from({ length: 6 }, (_, i) => ({ title: `Project ${i+1}`, img: "/dummy.jpg" }));

  return (
    <main ref={ref} className="min-h-screen flex flex-col items-center justify-start py-20">
      <div className="max-w-6xl w-full px-6">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-4xl font-semibold mb-6">Selected Work</motion.h1>
        <p className="mb-10 opacity-80">Projects and case studies — placeholder content.</p>

        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div key={p.title} variants={item} whileHover={{ y: -8, scale: 1.02 }} className="rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.02)]">
              <div className="h-48 bg-[url('/assets/placeholder-1.jpg')] bg-cover bg-center" />
              <div className="p-6">
                <h3 className="text-xl font-medium">{p.title}</h3>
                <p className="mt-2 opacity-75">Short caseline & contribution summary.</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

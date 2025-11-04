import React from "react";
import { motion } from "framer-motion";
import useInView from "../utils/useInView.js";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] } }
};

export default function Showcase() {
  const [ref, inView] = useInView({ threshold: 0.12 });

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>Featured Projects</motion.h2>
        <p className="mb-8 opacity-75">A curated selection – placeholder thumbnails used. Replace with project images.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.article
              key={i}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl overflow-hidden p-0 bg-[rgba(255,255,255,0.02)] shadow-sm transform transition duration-500"
            >
              <div className="h-56 bg-[url('/assets/placeholder-1.jpg')] bg-cover bg-center" />
              <div className="p-4">
                <h3 className="font-medium text-lg">Project {i}</h3>
                <p className="mt-2 opacity-75">Short description mirroring the layout from the video.</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import useInView from "../utils/useInView.js";

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.12 });

  return (
    <main ref={ref} className="min-h-screen flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="max-w-2xl p-8">
        <h1 className="text-3xl font-semibold mb-4">Get in touch</h1>
        <p className="mb-6 opacity-80">Email: hello@pehchaan.media</p>
        <form className="space-y-4">
          <input placeholder="Name" className="w-full p-3 rounded-lg bg-[#0f1115] border border-[#222]" />
          <input placeholder="Email" className="w-full p-3 rounded-lg bg-[#0f1115] border border-[#222]" />
          <textarea placeholder="Message" rows="5" className="w-full p-3 rounded-lg bg-[#0f1115] border border-[#222]" />
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-1 to-brand-2">Send</button>
        </form>
      </motion.div>
    </main>
  );
}

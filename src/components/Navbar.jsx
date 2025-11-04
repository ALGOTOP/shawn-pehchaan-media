import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", target: "#hero" },
  { label: "Work", target: "#work" },
  { label: "About", target: "#about" },
  { label: "Contact", target: "#contact" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0 },
};

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
      className="fixed top-6 left-0 right-0 z-40 flex justify-center pointer-events-none"
    >
      <div className="max-w-6xl w-full px-6 pointer-events-auto">
        <div className="flex items-center justify-between bg-[rgba(255,255,255,0.02)] backdrop-blur-md rounded-3xl px-4 py-3 shadow-lg border border-white/5">
          {/* Logo / Branding */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-1 to-brand-2 flex items-center justify-center text-black font-bold cursor-pointer"
            >
              P
            </motion.a>
            <div className="hidden sm:block">
              <div className="font-semibold">Pehchaan Media</div>
              <div className="text-xs opacity-70">Full service — Global</div>
            </div>
          </div>

          {/* Navigation Links */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.target}
                href={link.target}
                variants={item}
                whileHover={{ y: -3 }}
                className="text-sm hover:text-purple-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            <div className="ml-2">
              <a href="#contact" className="text-xs opacity-80 hover:text-purple-400 transition-colors">
                Client Login
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

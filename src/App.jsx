import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Showcase from "./components/Showcase.jsx";
import Footer from "./components/Footer.jsx";
import Work from "./components/Work.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { startRouter } from "./router.js";
import { AnimatePresence, motion } from "framer-motion";

// route map unchanged
const ROUTES = {
  "/": () => <Home />,
  "/work": () => <Work />,
  "/about": () => <About />,
  "/contact": () => <Contact />
};

function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Footer />
    </>
  );
}

// Page transition variants — subtle and elegant
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -8 }
};

const pageTransition = {
  duration: 0.48,
  ease: [0.2, 0.9, 0.2, 1]
};

export default function App() {
  useEffect(() => {
    startRouter();
  }, []);

  const [location, setLocation] = useState(window.location.pathname);
  useEffect(() => {
    const handler = () => setLocation(window.location.pathname);
    window.addEventListener("locationchange", handler);
    return () => window.removeEventListener("locationchange", handler);
  }, []);

  const RouteComponent = ROUTES[location] ?? ROUTES["/"];

  return (
    <div className="min-h-screen antialiased bg-[#050508]">
      <Nav />
      {/* AnimatePresence ensures exit animations run when component unmounts */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <RouteComponent />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

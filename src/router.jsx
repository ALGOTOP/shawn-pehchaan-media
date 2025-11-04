import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

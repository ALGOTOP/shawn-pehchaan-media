import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

const Router = () => (
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/work" element={<Work />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default Router;

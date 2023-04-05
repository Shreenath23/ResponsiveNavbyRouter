import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Demo from "./pages/Demo";
import Home from "./pages/Home";
import KeyFeature from "./pages/KeyFeature";
import Pricing from "./pages/Pricing";
import Testimonial from "./pages/Testimonial";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<KeyFeature />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonilas" element={<Testimonial />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

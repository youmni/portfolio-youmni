import { useState } from "react";
import React from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./utils/ScrollToTop";  

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="max-w-6xl w-full mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

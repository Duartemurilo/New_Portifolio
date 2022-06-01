import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
      <Routes>
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Routers;

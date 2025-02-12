import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import Navbar from "./components/Navbar/Navbar";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectPage from "./pages/Projects/ProjectPage";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

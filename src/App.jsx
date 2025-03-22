import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage";
import { AboutPage } from "./pages/About/AboutPage";
import Navbar from "./components/Navbar/Navbar";
import { ProjectsListPage } from "./pages/Projects/ProjectsListPage";
import { ProjectPage } from "./pages/Projects/ProjectPage";
import { ContactPage } from "./pages/Contact/ContactPage";
import { getLocalStorageItem } from "./utils/browser";
const App = () => {
  useEffect(() => {
    const selectedTheme = getLocalStorageItem("selectedTheme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else {
      document.body.classList.add("light");
    }
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsListPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

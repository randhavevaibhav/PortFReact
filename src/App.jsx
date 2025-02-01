import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

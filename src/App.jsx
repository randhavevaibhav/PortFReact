import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About/AboutPage";
import Navbar from "./components/Navbar";
const App =()=>{
  return(<>

  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
  </Router>
 
  
  </>)
}


export default App;
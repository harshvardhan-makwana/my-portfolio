import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Navbar"
import ContactSection from "./ContactSection";
import Home from "./Home";
import ProjectSection from "./ProjectSection";

function App() {
 
  return (
    <>
    <Navbar/>
    <Home/>
    <ProjectSection/>
    <ContactSection/>  
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Dariel from "./sections/Dariel/Dariel";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Dariel />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

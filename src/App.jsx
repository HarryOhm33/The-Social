import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Testimonial />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

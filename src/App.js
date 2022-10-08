import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Featured from "./components/Featured";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="App">
        <Navbar />
        <HeroSection />
        <Featured />
        <Signup />
        <Footer />
      </section>
    </>
  );
}

export default App;



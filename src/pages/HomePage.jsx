import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExerciseSection from "../components/ExercisesSection";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ExerciseSection />
      <Footer />
    </div>
  );
};

export default HomePage;

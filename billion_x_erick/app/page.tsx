import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import HeroSection from "../components/HeroSection";
import PricingSection from "../components/PricingSection";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footers";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients/>
      <HeroSection/>
      <PricingSection/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;

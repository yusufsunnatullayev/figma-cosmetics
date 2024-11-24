import React from "react";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Course from "../components/Course";
import About from "../components/About";
import Options from "../components/Options";
import Modul from "../components/Modul";
import Masterclass from "../components/Masterclass";
import Reason from "../components/Reason";
import Discount from "../components/Discount";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Hero />
      <Statistics />
      <Course />
      <About />
      <Options />
      <Modul />
      <Masterclass />
      <Reason />
      <Discount />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

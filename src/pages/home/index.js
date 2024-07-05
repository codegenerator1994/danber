import React from "react";

import Navbar from "../../components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Intro from "./sections/Intro";
import Describe from "./sections/Describe";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Intro />
      <Describe />
      <Footer />
    </>
  );
};

export default Home;

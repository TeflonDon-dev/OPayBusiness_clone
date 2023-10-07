import React from "react";
import Marketing from "../components/Marketing";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Marketing />
      <Partners />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;

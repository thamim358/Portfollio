import React from "react";
import "./Landing.scss";
import Header from "./Header/Header";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import AboutMe from "./AboutMe/AboutMe";


function Landing() {
  return (
    <>
      <Header />
      <AboutMe/>
      <Services   />
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Landing;

import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import "./Landing.scss";
import Services from "./Services/Services";


function Landing() {
  return (
    
    <>
      <Header/>
      <Home/>
      <AboutMe/>
      <Services/>
      {/* <Skills/> */}
      {/* <Payment/> */}
      {/* <Events/> */}
      <ContactUs/>
      <Footer/>
     
     
    </>
  );
}

export default Landing;

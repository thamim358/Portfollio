import React from "react";
import "./Landing.scss";
import Header from "./Header/Header";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Events from "./Events/Events";
import Home from "./Home/Home";
import Payment from "./Payment/Payment";


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

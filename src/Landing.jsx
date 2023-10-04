import React,{useEffect} from "react";
import AboutMe from "./AboutMe/AboutMe";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import "./Landing.scss";
import Services from "./Services/Services";


function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

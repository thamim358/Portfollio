import React, { useEffect } from "react";
import "../Header/Header.scss";
import journal from "../img/Journal-Template.docx";
// import thamimpdf from "../img/Thamim Resume2.pdf";
import WOW from "wow.js";

import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const Publications = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <Header />
      <div className="section" id="aboutsection">
        <div className="py-10 px-5 mx-8 lg:mx-20">
          <div className="text-center text-5xl text-blue-800 uppercase font-extrabold wow fadeInUp">
            Publications
          </div>
          <div className="text-center text-2xl font-bold text-gray-600 mt-4">
            Selected papers will be published in the Conference Proceedings with
            ISBN NO.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Publications;

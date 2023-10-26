import React, { useEffect } from "react";
import "../Header/Header.scss";
import best from "../img/BEST1.mp4";
import WOW from "wow.js";
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
          <div className="text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-800  font-bold text-center wow fadeInUp">
            Publications
          </div>
          <div className="text-center text-base lg:text-2xl font-bold text-gray-600 mt-4">
          All accepted papers will be published in conference proceedings with ISBN
          </div>
          <div className="text-center text-base lg:text-2xl font-bold text-gray-600 mt-2">
          The selected and presented paper will be processed with Additional Fee for publishing in UGC Care, Scopus Indexed Journals.
          </div>
          <div className="bg-white p-4 rounded-lg drop-shadow-lg mt-5">
            <div className="aspect-w-9 aspect-h-5">
              <video className="w-full h-full object-cover rounded-lg" preload="auto" controls={false}
          autoPlay
          loop
          muted
          loading="lazy">
                <source src={best} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Publications;

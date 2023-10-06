import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import arun from "../img/arun.jpeg";
import suresh from "../img/suresh.jpeg";

export const KeyNotes = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="mx-3 lg:mx-12 px-5 sm:mx-3 pb-10">
        <div className="text-3xl sm:text-2xl  lg:text-5xl uppercase  text-blue-800 mx-5 sm:mx-5 font-bold text-center wow fadeInUp pt-10 ">
          KEY NOTE TALKS
        </div>
        <div className="text-center text-xl sm:text-xl lg:text-2xl font-bold text-gray-600 mt-4  wow fadeInUp">
          Discover Our Inspiring Keynote Speakers
        </div>
        <div className="flex flex-col lg:flex-row">
          {/* First Component */}
          <div className="flex flex-col items-center justify-center  lg:w-1/2 mt-10  wow fadeInUp">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-offset-2 ring-4 ring-blue-800 ">
              <img
                src={arun} // Replace with your image URL
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-2xl font-semibold">ARUN KUMAR</p>
              <p className="text-lg text-blue-800 font-semibold mt-2">
                YUSHAN PROGRAM MINISTRY OF EDUCATION
              </p>
              <p className="text-lg text-blue-800 font-semibold">TAIWAN</p>
            </div>
          </div>

          {/* Second Component (Similar to First) */}
          <div className="flex flex-col items-center justify-center  lg:w-1/2 mt-10  wow fadeInUp">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-offset-2 ring-4 ring-blue-800">
              <img
                src={suresh} // Replace with your image URL
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center  wow fadeInUp">
              <p className="text-2xl font-semibold">DR. K. SURESH JOSEPH</p>
              <p className="text-lg text-blue-800 font-semibold mt-2 uppercase">
                Department of Computer Science
              </p>

              <p className="text-lg text-blue-800 font-semibold uppercase">
                School of Engineering & Technology
              </p>
              <p className="text-lg text-blue-800 font-semibold uppercase">
               Pondicherry university
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// export default PaperSubmission;

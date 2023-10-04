import React, { useEffect } from "react";
import { Link } from "react-scroll";
import WOW from "wow.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Events() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
    <Header/>
      <div className="section " id="services">
        <div className="text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-600 mx-5 sm:mx-5 font-bold text-center wow fadeInUp pt-10">
          EVENT SCHEDULE
        </div>
        <p
          className="text-gray-500 text-center text-lg mt-3 font-bold
        uppercase"
        >
          Stay informed about these important dates!!
        </p>
        <div className="mx-3 lg:p-20 px-5 sm:mx-3 mt-2 ">
          <div className="drop-shadow-xl text-black shadow-blue-500 bg-white rounded-lg p-5 hover:bg-gradient-to-r from-blue-700 to-blue-500 hover:text-white">
            <div className="text-left  font-bold text-2xl">
              Submission Deadline
            </div>
            <div className="text-left mt-2">15th November, 2023</div>
          </div>
          <div className="drop-shadow-xl bg-white text-black rounded-lg p-5 hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white">
            <div className="text-left  font-bold text-2xl">
              Acceptance Notification
            </div>
            <div className="text-left mt-2">30th November, 2023</div>
          </div>
          <div className="drop-shadow-xl bg-white text-black rounded-lg p-5 hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white">
            <div className="text-left  font-bold text-2xl">
              Registration Deadline
            </div>
            <div className="text-left mt-2">10th December, 2023</div>
          </div>
          <p
            className=" text-gray-500 text-left text-lg mt-8  mb-5 font-bold
        uppercase"
          >
            We eagerly await your contributions and look forward to your
            participation in our conference!
          </p>
      
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Events;

import React, { useEffect } from "react";
import { Link } from "react-scroll";
import WOW from "wow.js";

function Events() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="section " id="services">
        <div className="text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-600 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
          EVENT SCHEDULE
        </div>
        <p
          className="text-gray-500 text-center text-lg mt-3 font-bold
        uppercase"
        >
          Stay informed about these important dates!!
        </p>
        <div className="mx-3 lg:p-20 px-5 sm:mx-3 mt-4 ">
          <div className="drop-shadow-xl text-black shadow-blue-500 bg-white rounded-lg p-5 hover:bg-gradient-to-r from-blue-700 to-blue-500 hover:text-white">
            <div className="text-left  font-bold text-2xl">
              Submission Deadline
            </div>
            <div className="text-left mt-2">1st September, 2023</div>
          </div>
          <div className="drop-shadow-xl bg-white text-black rounded-lg p-5 hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white">
            <div className="text-left  font-bold text-2xl">
              Acceptance Notification
            </div>
            <div className="text-left mt-2">16st September, 2023</div>
          </div>
          <div className="drop-shadow-xl bg-white text-black rounded-lg p-5 hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white">
            <div className="text-left  font-bold text-2xl">
              Registration Deadline
            </div>
            <div className="text-left mt-2">26st September, 2023</div>
          </div>
          <div className="drop-shadow-xl bg-white text-black rounded-lg p-5 hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white">
            <div className="text-left  font-bold text-2xl">Dates</div>
            <div className="text-left mt-2">18th & 19th October, 2023</div>
          </div>
          <p
            className=" text-gray-500 text-left text-lg mt-8  mb-5 font-bold
        uppercase"
          >
            We eagerly await your contributions and look forward to your
            participation in our conference!
          </p>
          <Link
            className=" bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-2 px-4 rounded-md hover:from-yellow-600 hover:to-blue-500 wow bounceIn cursor-pointer text-lg"
            to="registration"
            spy={true}
            smooth={true}
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
    </>
  );
}

export default Events;

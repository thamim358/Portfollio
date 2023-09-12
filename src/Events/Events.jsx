import React, { useEffect } from "react";
import WOW from "wow.js";

function Events() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="section " id="services">
        <div className="Name uppercase text-5xl text-blue-600 sm:mx-5 mx-5  mt-5 pt-5 font-bold text-center wow fadeInUp">
          EVENT SCHEDULE
        </div>
        <div className="mx-3 lg:p-20 px-5 sm:mx-3 mt-8 ">
          <div className="drop-shadow-xl text-black shadow-blue-500 bg-white rounded-lg p-5 hover:bg-gradient-to-r from-blue-700 to-blue-500 hover:text-white" >
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
        </div>
      </div>
    </>
  );
}

export default Events;

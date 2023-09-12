import React, { useState, useEffect, useRef } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import logoimg from "../img/payQR.png";

function Payment() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <div className="section mx-3 lg:p-20 px-5 sm:mx-3" id="whyme">
        <p className=" text-4xl lg:text-5xl text-blue-600 font-bold text-left  wow fadeInUp">
          PAYMENT DETAILS
        </p>

        <div className="">
          <div className="context lg:mr-8 mt-5">
            <ul className="list-disc marker:text-black-500">
              <div className="wow fadeInUp">
                <div className="text-sm lg:text-base text-gray-600  font-medium font-sans ">
                  The registration for the  conference is only valid
                  after receipt of the full registration fees. Payment can be
                  made by NEFT/wire transfer. All participants are required to
                  submit Camera Ready Copy, copyright form, registration form,
                  and payment proof in compressed (zip) format via email to{" "}
                  <span className="text-blue-600">meenakasa@srmist.edu.in</span>
                  <div className="text-left mt-3">
                    <p className="text-gray-600 wow fadeInUp  mb-5 text-lg font-bold">
                      Name :{" "}
                      <span className="text-gray-500 font-medium">
                      Department of CSH, Vadapalani Campus, SRM University
                      </span>
                    </p>
                    <p className="text-gray-600 wow fadeInUp  mb-5 text-lg font-bold">
                      A/c No :{" "}
                      <span className="text-gray-500 font-medium">
                        500101011067710
                      </span>
                    </p>
                    <p className="text-gray-600 wow fadeInUp  mb-5 text-lg font-bold">
                      Bank :{" "}
                      <span className="text-gray-500 font-medium">
                        City Union Bank
                      </span>
                    </p>
                    <p className="text-gray-600 wow fadeInUp  mb-5 text-lg font-bold">
                      IFSC :{" "}
                      <span className="text-gray-500 font-medium">
                        CIUB0000117
                      </span>
                    </p>
                    <p className="text-gray-600 wow fadeInUp  mb-5 text-lg font-bold">
                      Branch :{" "}
                      <span className="text-gray-500 font-medium">
                        Tambaram, Chennai
                      </span>
                    </p>
                  </div>
                </div>
                <div className="">
                  <img src={logoimg} alt="wdwd" className="" />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;

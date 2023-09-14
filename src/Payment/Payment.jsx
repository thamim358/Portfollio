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
        <p className=" text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-600 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
          PAYMENT DETAILS
        </p>

        <div className="">
            <div className="context lg:mr-8 mt-5">
              <ul className="list-disc marker:text-black-500">
                <div className="wow fadeInUp">
                  <div className="">
                    <p className="text-sm lg:text-base text-gray-600  font-bold font-sans uppercase">
                      To secure your spot at the conference, please complete the
                      registration process by making the full payment. We accept
                      payments via NEFT/wire transfer.
                    </p>
                    <p className="mt-2 text-sm lg:text-base text-gray-600 font-medium">Please follow these steps:</p>
                    <ol className="mt-2 text-sm lg:text-base text-gray-600 font-medium">
                      <li>
                      → Prepare your Camera Ready Copy, copyright form, and
                        registration form.
                      </li>
                      <li> → Compress all documents into a zip file.</li>
                      <li>
                      →  Email the compressed file, along with your payment
                        proof, to:{" "}<span className="text-blue-600">
                      meenakasa@srmist.edu.in
                    </span>
                      </li>
                    </ol>
                    
                    <div className="text-left mt-3">
                    <p className="text-gray-600 text-lg uppercase font-bold mt-5 ">Make the payment to the following account:</p>
                      <p className="text-gray-600 wow fadeInUp  mb-5 text-lg font-bold mt-5">
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
                          Tambaram, Chennai.i
                        </span>
                      </p>
                      
                    </div>
                  </div>
                  <div className=" ml-4">
                    <img src={logoimg} alt="wdwd" className="" />
                  </div>
                  <p className="text-gray-600 wow fadeInUp  mb-5 text-lg font-bold">Your registration will be confirmed upon receipt of all required documents and payment.</p>
      
                </div>
              </ul>
            </div>
          </div>
      </div>
    </>
  );
}

export default Payment;

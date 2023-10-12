import React, { useEffect } from "react";
import registerform from "../img/register.pdf";
import "../Header/Header.scss";
import WOW from "wow.js";
import logoimg from "../img/UPI.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSchool,
  faBookmark,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-scroll";

function Register() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  
  }, []);

  return (
    <>
      <Header />
      <div className="section lg:mx-10 sm:mx-5 mx-5" id="registration">
        <div className="">
          <div className="mt-10 text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-800 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
            REGISTRATION
          </div>
          <div className="Name text-xl text-center text-gray-600  pt-5 pb-5 font-bold ">
            It must have atleast one Registered author in order for it to appear in the publications and be included In the technical program.
          </div>
          {/* <div className="text-center mt-3">
            <span className=" text-base text-center text-gray-600 px-1">
              Download :
            </span>

            <a
              className="uppercase text-base text-blue-800 font-bold "
              href={registerform}
              download="register"
              target="_blank"
            >
              Registration Form (PDF)
            </a>
          </div> */}
          <div className="mt-10">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12 ">
                <div className="mb-6 lg:mb-0 ">
                  <div className="block rounded-lg drop-shadow-xl bg-white shadow-lg">
                    <div className="z-1 flex justify-end">
                      <FontAwesomeIcon
                        className="-mt-6  p-2"
                        size="2xl"
                        icon={faBookmark}
                        style={{ color: "#1805a8" }}
                      />
                    </div>
                    <div className=" p-6 text-center">
                      <div className=" p-2">
                        <FontAwesomeIcon
                          className="mt-1"
                          size="2xl"
                          icon={faGraduationCap}
                          style={{ color: "#1d4ed8" }}
                        />
                      </div>
                      <h2 className="mb-12 text-center text-2xl font-bold">
                      CORPORATE PROFESSIONALS/OTHERS
                      </h2>
                      <h3 className="mb-6 text-3xl">
                        <div className="bg-[#3b82f6] p-4 shadow-lg rounded-bl-xl rounded-tr-lg   mt-2">
                          <strong className="text-center text-white   ">
                            ₹1000


                          </strong>
                        </div>

                        <div className="text-base text-neutral-400 mt-4">
                          Price Including GST
                        </div>
                      </h3>

                      <Link
                        className="mt-3 bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-1 px-4 rounded-md hover:from-yellow-600 hover:to-blue-500 wow bounceIn cursor-pointer text-lg"
                        to="payment"
                        spy={true}
                        smooth={true}
                        // onClick={() => navigate('/AboutDetails')}
                      >
                        REGISTER NOW
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mb-6 lg:mb-0 ">
                  <div className="block rounded-lg drop-shadow-xl bg-white shadow-lg">
                    <div className="z-1 flex justify-end">
                      <FontAwesomeIcon
                        className="-mt-6  p-2"
                        size="2xl"
                        icon={faBookmark}
                        style={{ color: "#1805a8" }}
                      />
                    </div>
                    <div className=" p-6 text-center">
                      <FontAwesomeIcon
                        className="mt-1 p-2"
                        size="2xl"
                        icon={faBook}
                        style={{ color: "#1d4ed8" }}
                      />
                      <h2 className="mb-12 text-center text-2xl font-bold">
                        RESEARCH SCHOLARS/FACULTIES
                      </h2>

                      <h3 className="mb-6 text-3xl">
                        <div className="bg-[#3b82f6] p-4 shadow-lg rounded-bl-xl rounded-tr-lg  z-20 mt-2">
                          <strong className="text-center text-white   ">
                            ₹500
                          </strong>
                        </div>

                        <div className="text-base text-neutral-400 mt-4">
                          Price Including GST
                        </div>
                      </h3>

                      <Link
                        className="mt-5 bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-1 px-4 rounded-md hover:from-yellow-600 hover:to-blue-500 wow bounceIn cursor-pointer text-lg"
                        to="payment"
                        spy={true}
                        smooth={true}
                        // onClick={() => navigate('/AboutDetails')}
                      >
                        REGISTER NOW
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-6 lg:mb-0 ">
                  <div className="block rounded-lg drop-shadow-xl bg-white shadow-lg">
                    <div className="z-1 flex justify-end">
                      <FontAwesomeIcon
                        className="-mt-6  p-2"
                        size="2xl"
                        icon={faBookmark}
                        style={{ color: "#1805a8" }}
                      />
                    </div>
                    <div className=" p-6 text-center">
                      <FontAwesomeIcon
                        className="mt-1 p-2"
                        size="2xl"
                        icon={faSchool}
                        style={{ color: "#1d4ed8" }}
                      />
                      <h2 className="mb-12 text-center text-2xl font-bold pb-8">
                        UG/PG STUDENTS
                      </h2>

                      <h3 className="mb-6 text-3xl">
                        <div className="bg-[#3b82f6] p-4 shadow-lg rounded-bl-xl rounded-tr-lg  z-20 mt-2">
                          <strong className="text-center text-white   ">
                            ₹250
                          </strong>
                        </div>

                        <div className="text-base text-neutral-400 mt-4">
                          Price Including GST
                        </div>
                      </h3>

                      <Link
                        className="mt-3 bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-1 px-4 rounded-md hover:from-yellow-600 hover:to-blue-500 wow bounceIn cursor-pointer text-lg"
                        to="payment"
                        spy={true}
                        smooth={true}
                        
                      >
                        REGISTER NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
        <div className="section  mt-12 sm:mx-4 mx-4 " id="payment">
          <p className=" text-3xl sm:text-2xl  lg:text-5xl uppercase  text-blue-800 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
            PAYMENT DETAILS
          </p>

          <div className="">
            <div className="context lg:mr-8 mt-9">
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
                        icicsrm2024@gmail.com
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
                        500101013160065
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
                  <div className=" ml-4">
                    <img src={logoimg} alt="wdwd" className="w-full h-full lg:w-80 lg:h-72" />
                  </div>
                  <p className="text-gray-600 wow fadeInUp  mb-5 text-lg font-bold mt-4">Your registration will be confirmed upon receipt of all required documents and payment.</p>
      
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;

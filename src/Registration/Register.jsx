import React, { useEffect } from "react";
import registerform from "../img/register.pdf";
import "../Header/Header.scss";
import WOW from "wow.js";
import logoimg from "../img/payQR.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSchool,
  faBookmark,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Register() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="section" id="registration">
        <div className="mx-3 lg:mx-12 px-5 sm:mx-3">
          <div className="mt-10 text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-600 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
            REGISTRATION
          </div>
          <div className="Name uppercase text-xl text-center text-gray-600 mt-5 pt-5 font-bold ">
            It is mandatory for at least one author of an accepted paper to
            register in order for the paper to appear in the publication and
            included in the Technical Program.
          </div>
          <div className="text-center mt-3">
            <span className=" text-base text-center text-gray-600 px-1">
              Download :
            </span>

            <a
              className="uppercase text-base text-blue-600 font-bold "
              href={registerform}
              download="register"
              target="_blank"
            >
              Registration Form (PDF)
            </a>
          </div>
          <div className="my-10 mx-4 md:px-6 sm:mx-22">
            <section className=" ">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12 ">
                <div className="mb-6 lg:mb-0 ">
                  <div className="block rounded-lg drop-shadow-xl bg-white shadow-lg">
                    <div className="z-20 flex justify-end">
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
                        ACADEMICIANS
                      </h2>

                      <h3 className="mb-6 text-3xl">
                        <div className="bg-[#3b82f6] p-4 shadow-lg rounded-bl-xl rounded-tr-lg -ml-14 z-20 mt-2">
                          <strong className="text-center text-white  pl-10 ">
                            ₹1000
                          </strong>
                        </div>

                        <div className="text-base text-neutral-400 mt-4">
                          Price Including GST
                        </div>
                      </h3>

                      <button
                        className="mt-3 bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-1 px-4 rounded-md hover:from-yellow-600 hover:to-blue-500 wow bounceIn cursor-pointer text-lg"
                        type="submit"
                        // onClick={() => navigate('/AboutDetails')}
                      >
                        REGISTER NOW
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6 lg:mb-0 ">
                  <div className="block rounded-lg drop-shadow-xl bg-white shadow-lg">
                    <div className="z-20 flex justify-end">
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
                        RESEARCH SCHOLARS
                      </h2>

                      <h3 className="mb-6 text-3xl">
                        <div className="bg-[#3b82f6] p-4 shadow-lg rounded-bl-xl rounded-tr-lg -ml-14 z-20 mt-2">
                          <strong className="text-center text-white  pl-10 ">
                            ₹750
                          </strong>
                        </div>

                        <div className="text-base text-neutral-400 mt-4">
                          Price Including GST
                        </div>
                      </h3>

                      <button
                        className="mt-3 bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-1 px-4 rounded-md hover:from-yellow-600 hover:to-blue-500 wow bounceIn cursor-pointer text-lg"
                        type="submit"
                        // onClick={() => navigate('/AboutDetails')}
                      >
                        REGISTER NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-6 lg:mb-0 ">
                  <div className="block rounded-lg drop-shadow-xl bg-white shadow-lg">
                    <div className="z-20 flex justify-end">
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
                      <h2 className="mb-12 text-center text-2xl font-bold">
                        UG/PG STUDENTS
                      </h2>

                      <h3 className="mb-6 text-3xl">
                        <div className="bg-[#3b82f6] p-4 shadow-lg rounded-bl-xl rounded-tr-lg -ml-14 z-20 mt-2">
                          <strong className="text-center text-white  pl-10 ">
                            ₹500
                          </strong>
                        </div>

                        <div className="text-base text-neutral-400 mt-4">
                          Price Including GST
                        </div>
                      </h3>

                      <button
                        className="mt-3 bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-1 px-4 rounded-md hover:from-yellow-600 hover:to-blue-500 wow bounceIn cursor-pointer text-lg"
                        type="submit"
                        // onClick={() => navigate('/AboutDetails')}
                      >
                        REGISTER NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="section mx-3 lg:p-20 px-5 sm:mx-3  " id="whyme">
          <p className=" text-3xl sm:text-3xl  lg:text-5xl uppercase  text-blue-600 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
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
      </div>
      <Footer />
    </>
  );
}

export default Register;

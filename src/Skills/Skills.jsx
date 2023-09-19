import React, { useEffect } from "react";
import registerform from "../img/register.pdf";
import "../Header/Header.scss";
import WOW from "wow.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faGraduationCap,
faSchool,
faBookmark,
faBook
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="section" id="registration">
        <div className="mx-3 lg:mx-12 px-5 sm:mx-3">
          <div className=" mt-10 text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-600 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
            REGISTRATION
          </div>
          <div className="Name uppercase text-xl text-center text-gray-600 mt-5 pt-5 font-bold ">
          It must Have atleast one Registerd author in order for it to appear in the publications and be included un the technical program.
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
                          <strong className="text-center text-white  pl-10 ">₹1000</strong>
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
                          <strong className="text-center text-white  pl-10 ">₹750</strong>
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
                          <strong className="text-center text-white  pl-10 ">₹500</strong>
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
      </div>
    </>
  );
}

export default Skills;

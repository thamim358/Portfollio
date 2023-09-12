import React, { useEffect } from "react";
import registerform from "../img/register.pdf";
import "../Header/Header.scss";
import WOW from "wow.js";
import { Link } from "react-scroll";

function Skills() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="section" id="registration">
        <div className="mx-3 lg:mx-12 px-5 sm:mx-3">
          <div className="Name uppercase text-4xl text-center text-blue-600 mt-10 pt-10 font-bold wow fadeInUp">
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
          <div className="my-10 mx-auto md:px-6">
            <section className=" ">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12 ">
                <div className="mb-6 lg:mb-0 ">
                  <div className="block rounded-lg drop-shadow-xl bg-white shadow-lg">
                    <div className=" p-6 text-center">
                      <h2 className="mb-12 text-center text-2xl font-bold">
                    ACADEMICIANS
                      </h2>

                      <h3 className="mb-6 text-3xl">
                        <div className="bg-[#3b82f6] p-4 shadow-lg rounded-lg mt-2">
                          <strong>₹2000</strong>
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
                    <div className=" p-6 text-center">
                      <h2 className="mb-12 text-center text-2xl font-bold">
                       UG/PG STUDENTS  
                      </h2>

                      <h3 className="mb-6 text-3xl">
                        <div className="bg-[#3b82f6] p-4 shadow-lg rounded-lg mt-2">
                          <strong>₹1000</strong>
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
                    <div className=" p-6 text-center">
                      <h2 className="mb-12 text-center text-2xl font-bold">
                    RESEARCH SCHOLARS
                      </h2>

                      <h3 className="mb-6 text-3xl">
                        <div className="bg-[#3b82f6] p-4 shadow-lg rounded-lg mt-2">
                          <strong>₹1500</strong>
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

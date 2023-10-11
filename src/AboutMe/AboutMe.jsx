import React, { useEffect } from "react";
import "../Header/Header.scss";
import brochure from "../img/brochure.png";
import WOW from "wow.js";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";

export const AboutMe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const handleChange = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };
  return (
    <div className="section" id="aboutsection">
      <div className="py-10 lg:mx-10 sm:mx-2">
        <div className="  p-10  flex flex-col lg:flex-row justify-center items-center  ">
          <div className="image">
            {/* <img
              className="photos  mt-4 lg:mt-8 w-full  mb-4 lg:mb-8 rounded-2xl"
              src={logoimg}
              alt="Logo Image"
            /> */}
          </div>

          <div className="context ">
            <ul className="list-disc marker:text-black-500">
              <div className="lg:pl-9 wow fadeInUp">
                <div className="text-3xl lg:text-5xl text-blue-800  font-bold font-sans  ">
                  CONFERENCE OBJECTIVE
                  <div className="mt-2 ">
                    <p
                      className="text-sm sm:text-sm lg:text-base text-gray-500 font-semibold font-sans pb-5 pt-4"
                      style={{ textAlign: "justify", textJustify: "auto" }}
                    >
                      The first edition of the International Conference on
                      Intelligent Computing held at srmist vadapalani. The
                      premier program for the presentation of applied computer
                      science, and the conference invites researchers to
                      contribute to shape the computing technological advances
                      and research results in the field of intelligent
                      computing. This allows professionals to share their
                      insights, exchange ideas, and explore the landscape of
                      intelligent computing. Participation is invited from
                      academics and practitioners who are engaged in current
                      research about the role and significance of technology and
                      analytics, and who are interested in topics related to
                      Intelligent computing , ethics, equity, and social values
                      for global development.
                    </p>
                    <p className="text-sm sm:text-sm  lg:text-lg text-gray-500 font-semibold font-sans  pt-4">
                      Topics of interst include,but are not limited to
                    </p>
                    <p className="text-sm sm:text-sm  lg:text-lg text-gray-500 font-semibold font-sans mt-1 pb-5">
                      the following:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 uppercase">
                      {/* Column 1: Machine Learning */}
                      <ul>
                        <li className="uppercase text-semibold text-blue-800 text-base">
                          Machine Learning
                        </li>

                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Learning Method and Analysis
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Machine Learning Applications
                        </li>
                        <li className="text-sm  text-gray-500 font-medium  font-sans pt-2">
                          ‣ MACHINE MODELS AND APPLICATIONS
                        </li>
                        <li className="text-sm text-gray-500 font-medium  font-sans pt-2">
                          ‣ MACHINE RECOMMENDER SYSTEM
                        </li>
                        <li className="text-sm  text-gray-500 font-medium  font-sans pt-2">
                          ‣ MACHINE AND WIRELESS,MOBILE COMMUNICATION
                        </li>
                        <li className="text-sm  text-gray-500 font-medium font-sans pt-2">
                          ‣ MACHINE LEARNING TRENDS AND DEVELOPMENT IN NETWORK
                        </li>
                        <li className="text-sm  text-gray-500 font-medium  font-sans pt-2">
                          ‣ MACHINE LEARNING AND CYBER SECURITY
                        </li>
                      </ul>

                      {/* Column 2: Data Science */}
                      <ul>
                        <li className="uppercase text-semibold text-blue-800 text-base">
                          Data Science
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Big Data
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Data Analytics
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Data Mining and Management
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ DATA SCIENCE AND MACHINE LERANINIG
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ NATURAL LANGUAGE PROSSEING
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Data Mining and Management
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ SOCIAL NETWORK ANALYSIS
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ TIME SERIES ANALYSIS
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Predictive Analytics
                        </li>
                      </ul>

                      {/* Column 3: Deep Learning */}
                      <ul>
                        <li className="uppercase text-semibold text-blue-800 text-base">
                          Deep Learning
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Image and Video Processing
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Neural Networks
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Reinforcement Learning:
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Long Short-Term Memory
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Attention Mechanisms
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Neuroevolution
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣Recurrent Neural Networks
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Convolutional Neural Networks
                        </li>
                        <li className="text-sm text-gray-500 font-medium font-sans pt-2">
                          ‣ Transfer Learning
                        </li>
                      </ul>
                    </div>

                    <button
                      className="mt-3 bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-1 px-4 rounded-md hover:from-pink-500 hover:to-yellow-500 wow bounceIn cursor-pointer text-lg"
                      type="submit"
                      onClick={handleChange}
                    >
                      ABOUT THE DEPARTMENT
                      {/* <span><span/> */}
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="text-3xl lg:text-5xl text-blue-800 font-bold font-sans text-center pt-5">
          BROCHURE
        </div>
        <div className="flex justify-center">
          <div className="mt-4 flex justify-center p-5">
            <Image
              className="w-3/4 sm:w-1/2  md:w-full max-w-md md:max-w-2xl rounded-lg shadow-lg "
              src={brochure} 
              alt="Gallery 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

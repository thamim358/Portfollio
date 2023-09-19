import React, { useEffect } from "react";
import "../Header/Header.scss";
import logoimg from "../img/ieeecon.jpeg";
import WOW from "wow.js";
import { useNavigate } from "react-router-dom";

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
            <img
              className="photos  mt-4 lg:mt-8 w-full  mb-4 lg:mb-8 rounded-2xl"
              src={logoimg}
              alt="Logo Image"
            />
          </div>

          <div className="context ">
            <ul className="list-disc marker:text-black-500">
              <div className="lg:pl-9 wow fadeInUp">
                <div className="text-3xl lg:text-5xl text-blue-600  font-bold font-sans  ">
                  ABOUT
                  <div className="mt-2 ">
                    <p className="text-sm sm:text-sm  lg:text-base text-gray-500 font-bold font-sans pb-5 pt-4">
                      The International Conference on Intelligent Computing is
                      the premier program for the presentation of applied
                      computer science, and the conference invites researchers
                      to contribute to shape the computing technological
                      advances and research results in the field of intelligent
                      computing. This allows professionals to share their
                      insights, exchange ideas, and explore the landscape of
                      intelligence computing. Participation is invited from
                      academics and practitioners who are engaged in current
                      research about the role and significance of technology and
                      analytics, and who are interested in topics related to
                      Intelligent computing , ethics, equity, and social values
                      for global development.
                    </p>

                    <button
                      className="mt-3 bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-1 px-4 rounded-md hover:from-pink-500 hover:to-yellow-500 wow bounceIn cursor-pointer text-lg"
                      type="submit"
                      onClick={handleChange}
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

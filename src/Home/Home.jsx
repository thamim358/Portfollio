import React, { useEffect } from "react";
import "../Header/Header.scss";
// import thamimpdf from "../img/Thamim Resume2.pdf";
import { Facebook, Instagram, Youtube } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import WOW from "wow.js";


export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-screen home saturate-100 backdrop-contrast-200  bg-fixed md:w-full   " id="home">
      <div className="p-4 sm:p-8 lg:p-11 flex flex-col items-center">
        <div className="wow fadeInUp text-white text-center w-full">
          <div className="text-2xl lg:text-4xl sm:text-3xl leading-tight font-sans font-black py-5">
            WELCOME TO ICIC 2024
          </div>
          <div className=" text-2xl lg:text-3xl sm:text-2xl leading-tight font-sans font-black py-5">
            FIRST INTERNATIONAL CONFERENCE ON INTELLIGENT COMPUTING
          </div>
          <div className=" text-2xl lg:text-3xl sm:text-2xl leading-tight font-sans font-black">
          (HYBRID MODE)
          </div>
          <div className="text-xl lg:text-2xl leading-tight font-sans font-black py-5">
            HELD ON 5<sup>th</sup>JANUARY 2024
          </div>
          <div className="text-xl lg:text-lg font-sans font-black py-5">
            {/* ON SEPTEMBER 2023 */}
          </div>
          <div className="mx-4 sm:mx-5 backdrop-blur-sm bg-white/30 rounded-lg drop-shadow-2xl p-4">
            <div className="text-3xl font-sans font-black py-5">
              ORGANIZED BY DEPARTMENT OF COMPUTER SCIENCE AND APPLICATIONS
              (M.C.A)
              {/* ASSOCIATION WITH */}

            </div>
            <div className="flex justify-center">
              {/* <img src={ict} alt="wdwd" className="h-20 w-72 rounded-lg" /> */}
            </div>
          </div>
          <div className=" mt-4 text-lg sm:text-2xl leading-tight text-center uppercase  font-sans font-black py-5">
            Don't miss this opportunity to be a part of a vibrant and
            intellectual stimulating conference experience
          </div>
          <div className="text-lg sm:text-2xl leading-tight text-center uppercase  font-sans font-black py-3">
            Join with us to explore the frontiers of intelligent computing
            together.
          </div>
          <div className="mt-7 wow bounceIn items-center text-center">
            {/* <div className="sm:text-base lg:text-xl font-sans font-black py-5">
              Submit your article in the link {"   "}
              <a
                href="https://easychair.org/conference/?conf=ircled2025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005eff] max-w-full pl-2 overflow-x-auto"
              >
                https://easychair.org/conference/?conf=ircled2025
              </a>
            </div> */}
          </div>

          <div className="flex items-center justify-center gap-3 mt-6 pb-4">
            <a
              href="https://www.instagram.com/srm_csh_vdp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={32}
                variant="Bold"
                className="text-white transition duration-500 hover:text-pink-600 bg-clip-text hover:scale-125"
              />
            </a>
            <a
              href="https://www.facebook.com/SRMCSHVDP/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                size={32}
                className="transform transition duration-500 hover:scale-125 text-white hover:text-blue-600"
                variant="Bold"
              />
            </a>
            <a
              href="https://www.youtube.com/SRM_CSH_VDP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube
                size={32}
                variant="Bold"
                className="transform transition duration-500 hover:scale-125 text-white hover:text-red-700"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import { Facebook, Instagram ,Youtube} from "iconsax-react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
     <footer className="dashboard bottom-0  px-10 mt-5 py-4 p-5">
  <div className="flex flex-col lg:flex-row">
    <div className="flex flex-col w-full lg:w-1/2 p-10 wow fadeInUp">
      <div className="text-white text-3xl font-extrabold ">Discover Our Venue</div>
      <div className="text-white text-base mt-3">
      Experience the future at the SRM INSTITUTE OF SCIENCE AND TECHNOLOGY VADAPALANI CAMPUS Chennai, Tamil Nadu, India.
      </div>
      <div className="text-white text-base font-extrabold mt-3">
        <a
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Contact Our Authority
        </a>
      </div>
    </div>
    <div className="flex flex-col w-full lg:w-1/2 p-10 mt-5 lg:mt-0">
      <div className="text-white text-3xl font-extrabold wow fadeInUp">
      Stay Connected
      </div>
      <div className="text-white text-base mt-3">
      Don't miss a beat! Follow us on social media for the latest updates and news about our events.
      </div>
      <div className="flex  gap-3 mt-6 pb-4">
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
  <div className="flex flex-col-reverse divide-y-4 divide-y-reverse">
    <div className="divide-y-4 divide-gray-400 text-white text-center font-extrabold text-2xl pb-4">
      © 2023.ICIC
    </div>
  </div>
</footer>

    </>
  );
}

export default Footer;

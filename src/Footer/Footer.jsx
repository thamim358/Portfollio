import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import { Facebook, Instagram } from "iconsax-react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
     <footer className="dashboard  px-10 mt-5 py-4 p-5">
  <div className="flex flex-col lg:flex-row">
    <div className="flex flex-col w-full lg:w-1/2 p-10 wow fadeInUp">
      <div className="text-white text-3xl font-extrabold ">Venue Location</div>
      <div className="text-white text-base mt-3">
        2023 SRM INSTITUTE OF SCIENCE AND TECHNOLOGY
        (VADAPALANI CAMPUS), CHENNAI, TAMILNADU, INDIA
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
        Social Connection
      </div>
      <div className="text-white text-base mt-3">
        Don't miss a thing! Receive daily news You should connect social area
        for Any Proper Updates Anytime
      </div>
      <div className="text-white text-base font-extrabold mt-3">
        <div className="flex gap-3 mt-6">
          <a
            href="https://instagram.com/___thamim__?igshid=ZDc4ODBmNjlmNQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              size={32}
              variant="Bold"
              className="transform transition duration-500 hover:scale-125 text-[#005eff] hover:text-white"
            />
          </a>
          <a
            href="https://www.facebook.com/thamim.ansari.3572846"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              size={32}
              className="transform transition duration-500 hover:scale-125 text-[#005eff]  hover:text-white"
              variant="Bold"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thàmím-añsãrì-1114a81a4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={32}
              className="transform transition duration-500 hover:scale-125 text-[#005eff]  hover:text-white"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col-reverse divide-y-4 divide-y-reverse">
    <div className="divide-y-4 divide-gray-400 text-white text-center font-extrabold text-2xl pb-4">
      © 2023.
    </div>
  </div>
</footer>

    </>
  );
}

export default Footer;

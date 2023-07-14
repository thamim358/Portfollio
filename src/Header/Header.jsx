import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import { TypeAnimation } from "react-type-animation";
import thamimpdf from "../img/Thamim Resume2.pdf";
import WOW from "wow.js";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Facebook, Instagram } from "iconsax-react";

function Header() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  useEffect(() => {
    const closeMobileMenu = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("click", closeMobileMenu);

    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        id="Navbar"
        className="sticky top-0 left-0 right-0 w-full dashboard nav-bar sm:w-full z-10 "
      >
        <div className=" sm:mx-auto md:mx-10 lg:mx-20 flex items-center justify-between py-4 ">
          <div className="text-orange-600 font-black font-mono text-4xl  wow lightSpeedIn ml-4">
            🌌MTA
            {/* <img src={mta1} alt="wdwd" className=""/> */}
          </div>
          <nav>
            <div className="flex items-center justify-between md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white flex justify-end ml-10 hover:text-purple-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 mx-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-6 tracking-widest justify-between items-center wow lightSpeedIn`}
            >
              <li>
                <Link
                  className="text-white font-sans hover:text-orange-600  font-bold font-sans cursor-pointer"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-sans hover:text-orange-600  font-bold font-sans cursor-pointer"
                  to="aboutsection"
                  spy={true}
                  smooth={true}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-sans hover:text-orange-600 font-bold font-sans cursor-pointer"
                  to="services"
                  spy={true}
                  smooth={true}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-sans hover:text-orange-600  font-bold font-sans cursor-pointer"
                  to="skills"
                  spy={true}
                  smooth={true}
                >
                  SKILLS
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-white font-sans hover:text-orange-600 font-bold font-sans cursor-pointer"
                  to="contactme"
                  spy={true}
                  smooth={true}
                >
                  CONTACT ME
                </Link>
              </li>

              <li className="wow BounceIn">
              <a  className="bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-2 px-3 rounded hover:from-pink-500 hover:to-yellow-500 wow bounceIn cursor-pointer"
              to="donate"
              spy={true}
              smooth={true}
              href={thamimpdf}
              download="resume"
              target="_blank">
           
              DOWNLOAD CV
            </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 "
          onClick={toggleMobileMenu}
        ></div>
      )}
      <div className={`overlay-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="flex justify-between p-3">
          <div className="text-orange-600 font-mono font-bold text-3xl mx-4 ">
            🌌MTA
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-blue-600 hover:text-purple-600  focus:outline-none"
          >
            <svg
              className="w-6 h-6 mx-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className="flex flex-col space-y-6 p-7 ">
          <li className="">
            <Link
              className="text-blue-600 font-sans hover:text-purple-600 text-2xl font-bold font-sans cursor-pointer"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              🚀 HOME
            </Link>
          </li>
          <li className="">
            <Link
              className="text-blue-600 font-sans hover:text-purple-600 text-2xl font-bold font-sans cursor-pointer"
              to="aboutsection"
              spy={true}
              smooth={true}
            >
              🚀 ABOUT
            </Link>
          </li>
          <li className="">
            <Link
              className="text-blue-600 font-sans hover:text-purple-600 text-2xl font-bold cursor-pointer"
              to="services"
              spy={true}
              smooth={true}
            >
              🚀 SERVICES
            </Link>
          </li>
          <li className="">
            <Link
              className="text-blue-600 font-sans hover:text-purple-600 text-2xl font-bold font-sans cursor-pointer"
              to="skills"
              spy={true}
              smooth={true}
            >
              🚀 SKILLS
            </Link>
          </li>

          <li className="">
            <Link
              className="text-blue-600 font-sans hover:text-purple-600 text-2xl font-bold font-sans cursor-pointer"
              to="contactme"
              spy={true}
              smooth={true}
            >
              🚀 CONTACT ME
            </Link>
          </li>

          <li className="wow BounceIn">
            <a>
            <Link
              className="bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-2 px-3 rounded hover:from-pink-500 hover:to-yellow-500 wow bounceIn cursor-pointer"
              to="donate"
              spy={true}
              smooth={true}
              href={thamimpdf}
              download="resume"
              target="_blank"
              
            >
              DOWNLOAD CV
            </Link>
            </a>
          </li>
        </ul>
      </div>

      {/* SHUBBA REDDY */}
      <div className="dashboard w-screen bg-fixed md:w-full h-fit  " id="home">
        <div className="mx-5">
          <div className="flex flex-col items-center justify-center">
            <div className="  lg:p-3px tracking-wider mt-12">
              <div className="wow fadeIn mt-12 pt-5">
                <div className="text-white text-2xl leading-tight font-sans font-extrabold ">
                  <TypeAnimation
                    sequence={["HELLO", 1000]}
                    wrapper="span"
                    speed={50}
                    style={{ display: "inline-block" }}
                    className=""
                    // repeat={Infinity}
                  />
                </div>
                <div className="text-white text-6xl lg:text-6xl font-sans font-extrabold ">
                  I'M THAMIM{" "}
                  <span className="text-[#099FFF]  text-6xl lg:text-6xl font-sans font-extrabold break-keep">
                    <TypeAnimation
                      sequence={["ANSARI", 1000]}
                      wrapper="span"
                      speed={50}
                      style={{ display: "inline-block" }}
                      className=""
                      repeat={Infinity}
                    />
                  </span>
                </div>
                <div className="text-white text-xl font-sans font-bold gap-2">
                I'M A {""}
                <span>
                <TypeAnimation
                  sequence={[
                    " front-end react developer",
                    1000,
                    " freelancer",
                    1000,
                    " Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  className="text-[#099FFF] text-xl font-sans font-bold uppercase"
                  repeat={Infinity}
                />
                </span>
              </div>
              </div>

              <div className="mt-7 wow bounceIn">
                <a
                  className=" bg-gradient-to-r from-[#005eff] to-blue-400 text-white  hover:text-[#005eff] hover:from-pink-500 hover:to-yellow-500 rounded-lg font-bold px-7 p-3 cursor-pointer"
                  href={thamimpdf}
                  download="Resume"
                  target="_blank"
                >
                  DOWNLOAD CV
                </a>
              </div>
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
                <a
                  href="https://www.github.com/thamim358"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={32}
                    className=" transform transition duration-500 hover:scale-125 text-[#005eff]  hover:text-white "
                  />
                </a>
              </div>
            </div>
            <div className=" lg:mt-10 mt-5 mr-10 justify-self-center md:justify-center pb-10 ">
              <div>
                {/* <img src={headerImg} alt="Header Img" className="banner" /> */}
              </div>
              {/* </TrackVisibility> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

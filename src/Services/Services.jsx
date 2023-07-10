import React, { useState, useEffect, useRef } from "react";
import "./Skills.scss";
import WOW from "wow.js";
import invest from "../img/investment2.png";
import increase from "../img/increaseicon.png";
import aid from "../img/Aided.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faDesktop,
  faMobileScreen,
  faCode,
  faPhone,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FaFirefoxBrowser } from "react-icons/fa";
import { faBrowser } from "@fortawesome/free-regular-svg-icons";

function Services() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const cardsData = [
    {
      logo: (
        <FontAwesomeIcon
          icon={faComputer}
          className="text-blue-400 animate__animated animate__bounce"
          bounce
          size="3x"
          style={{ color: "#005eff" }}
        />
      ),
      title: "web development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faDesktop}
          className="text-blue-400 animate__animated animate__bounce"
          bounce
          size="3x"
          style={{ color: "#005eff" }}
        />
      ),
      title: "user interface",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faMobileScreen}
          className="text-blue-400 animate__animated animate__bounce"
          bounce
          size="3x"
          style={{ color: "#005eff" }}
        />
      ),
      title: "responsive design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const cardsData2 = [
    {
      logo: (
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="text-blue-400 animate__animated animate__bounce"
          bounce
          size="3x"
          style={{ color: "#005eff" }}
        />
      ),
      title: "web design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faCode}
          className="text-blue-400 animate__animated animate__bounce"
          bounce
          size="3x"
          style={{ color: "#005eff" }}
        />
      ),
      title: "clean code",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      logo: (
        <FontAwesomeIcon
          icon={faPhone}
          className="text-blue-400 animate__animated animate__bounce"
          bounce
          size="3x"
          style={{ color: "#005eff" }}
        />
      ),
      title: "fast support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <div className="section" id="services">
        <div className="Name uppercase text-4xl text-blue-600 mt-5 pt-5 font-bold text-center wow rotateIn">
          Services
        </div>
        <div className="flex flex-wrap justify-center mt-5 wow slideInUp">
          {cardsData.map((card, index) => (
            <div
              className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
              key={index}
            >
              <div className="bg-white bg-opacity-10 rounded-lg shadow-lg ">
                <div className="text-center p-4">{card.logo}</div>
                <div className="px-4 py-2">
                  <h3 className="text-base text-center text-white uppercase font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-blue-700 text-center text-sm uppercase">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center wow slideInUp">
          {cardsData2.map((card, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
              key={index}
            >
              <div className="bg-white bg-opacity-10  rounded-lg shadow-lg ">
                <div className="text-center p-4">{card.logo}</div>
                <div className="px-4 py-2">
                  <h3 className="text-base text-center text-white font-bold mb-2 uppercase">
                    {card.title}
                  </h3>
                  <p className="text-blue-700 text-center text-sm uppercase">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;

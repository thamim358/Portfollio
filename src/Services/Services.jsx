import React, { useEffect } from "react";
import "./Skills.scss";
import iot from "../img/ai2.png";
import artificial from "../img/vid.png";
import web from "../img/mach.png";
import big from "../img/big2.png";
import com from "../img/mining1.png";
import security from "../img/deep3.png";
import WOW from "wow.js";

function Services() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const cardsData = [
    {
      logo: <img className="h-44 w-48" src={iot} />,
      title: "ARTIFICIAL INTELIGENCE",
    },
    {
      logo: <img className="h-38 w-44" src={artificial} />,
      title: "IMAGE AND VIDEO PROCESSING",
    },
    {
      logo: <img className="h-44 w-48" src={com} />,
      title: "DATA MINING",
    },
  ];
  const cardsData2 = [
    {
      logo: <img className="h-44 w-48" src={web} />,
      title: " MACHINE LEARNING",
    },
    {
      logo: <img className="h-44 w-48" src={big} />,
      title: "BIG DATA",
    },
    {
      logo: <img className="h-44 w-48" src={security} />,
      title: "NEURAL AND DEEP LEARNING",
    },
  ];
  return (
    <>
      <div className="section " id="services">
        <div className="text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-800 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
        Share Your Research
        </div>
        <div className="mx-3 lg:mx-12 px-5 sm:mx-3">
        <p className="text-gray-500 text-center text-lg mt-5 font-bold
        uppercase">
  
          We welcome your valuable contributions to our upcoming conference!
        </p>
        <p className="text-gray-500 text-center text-lg mt-3 font-bold
        uppercase">
          Join hands with fellow scholars to exchange knowledge, insights, and
          discoveries.
        </p>
        </div>
        <div className="flex flex-wrap justify-center mt-5 wow fadeInUp  ">
          {cardsData.map((card, index) => (
            <div
              className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 transition duration-500 hover:scale-110"
              key={index}
            >
              <div className="dashboard1 rounded-lg shadow-lg ">
                <div className="flex justify-center items-center p-4">
                  {card.logo}
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-base text-center text-white uppercase font-bold mb-2">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center wow fadeInUp">
          {cardsData2.map((card, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 transition duration-500 hover:scale-110"
              key={index}
            >
              <div className="dashboard1  rounded-lg shadow-lg ">
                <div className="text-center flex justify-center items-center p-4 ">
                  {card.logo}
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-base text-center text-white font-bold mb-2 uppercase">
                    {card.title}
                  </h3>
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

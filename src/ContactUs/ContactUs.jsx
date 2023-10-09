import React, { useState, useEffect, useRef } from "react";
import "../Header/Header.scss";
import "./ContactUs.scss";
import WOW from "wow.js";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function ContactUs() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <section className="contact space" id="contactme">
        <Container>
          <div className="lg:px-10 pb-10">
            <div className=" mt-10 text-4xl sm:text-2xl  lg:text-4xl uppercase  text-blue-800  font-bold text-center wow fadeInUp">
              GET IN TOUCH
            </div>
            <Row className="flex flex-col justify-center items-center md:flex-row mt-5">
              <Col
                size={12}
                md={6}
                className="mx-5 sm:mx-5 md:w-3/5 lg:px-10 tracking-wider wow fadeInUp"
              >
                <div className="bg-white rounded-lg drop-shadow-lg p-4">
                  <div className="lg:aspect-w-20 aspect-h-20 aspect-video">
                    <iframe
                      className="w-full h-full lg:w-100 lg:h-70" 
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7470075309893!2d80.2079370737728!3d13.051769113118233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266ea218fc7e3%3A0x70bbbca6edfc9243!2sSRM%20University%20Vadapalani%20City%20Campus!5e0!3m2!1sen!2sin!4v1693847909809!5m2!1sen!2sin"
                    />
                  </div>
                </div>
              </Col>

              <Col size={12} md={6}>
                <div className="sm:p-7 lg:mt-5 p-4 mt-5 mr-10 justify-self-center md:justify-center">
                  <div className="flex ">
                    <div className=" p-2">
                      <FontAwesomeIcon
                        className="mt-1"
                        size="2xl"
                        icon={faEnvelope}
                        style={{ color: "#1d4ed8" }}
                      />
                    </div>
                    <div className="px-3 flex flex-col">
                      <div className="text-gray-600 font-mediun text-lg ">
                        Email Address
                      </div>
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        className="text-blue-800 font-mediun text-lg"
                      >
                       meenaksa@srmist.edu.in
                      </a>
                    </div>
                  </div>
                  <div className="flex  mt-3">
                    <div className=" p-2">
                      <FontAwesomeIcon
                        className="mt-1"
                        size="2xl"
                        icon={faPhone}
                        style={{ color: "#1d4ed8" }}
                      />
                    </div>
                    <div className="px-3 flex flex-col">
                      <div className="text-gray-600 font-mediun text-lg ">
                        Phone Number
                      </div>
                      <div
                        className="text-blue-800 font-mediun text-lg"
                      >
                        +91 98407 34471
                      </div>
                    </div>
                  </div>
                  <div className="flex  mt-3 ">
                    <div className=" p-2">
                      <FontAwesomeIcon
                        className="mt-1"
                        size="2xl"
                        icon={faLocation}
                        style={{ color: "#1d4ed8" }}
                      />
                    </div>
                    <div className="px-3 flex flex-col mt-3">
                      <div className="text-gray-600 font-mediun text-lg ">
                        Location
                      </div>
                       <div
                      
                      className="text-gray-600 font-mediun text-lg"
                    >
                      Department of Computer Science and Applications(M.C.A)
                    </div>
                    <div
                      className="text-gray-600 font-mediun text-lg"
                    >
                    SRMIST,faculty of Science & Humanities
                    </div>
                    <div
                      className="text-gray-600 font-mediun text-lg"
                    >
                     Vadapalani Campus Chennai - 600026.
                    </div>
                    
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ContactUs;

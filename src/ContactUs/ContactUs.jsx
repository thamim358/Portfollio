import React, { useState, useEffect } from "react";
import "../Header/Header.scss";
import "./ContactUs.scss";
import WOW from "wow.js";
import contactImg from "../img/contact-img.svg";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function ContactUs() {
  const [status, setStatus] = useState({ success: false, message: "" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    dropdown: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmits = (event) => {
    event.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    axios
      .post("http://localhost/contactus/contact.php", data)
      .then((response) => {
        console.log(response.data); // Handle success response

        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
          dropdown: "Yes",
        });

        // Display success message
        setStatus({
          success: true,
          message: "Form failed",
        });
      })
      .catch((error) => {
        console.error(error); // Handle error

        // Display error message
        setStatus({
          success: false,
          message: "Form submitted successfully!",
        }); 
      });
  };


  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const form = event.target;
  //   const data = new FormData(form);

  //   axios
  //     .post("http://localhost/contactus/contact.php", data)
  //     .then((response) => {
  //       console.log(response.data); // Handle success response
  //       window.alert("Success: " + response.data); // Display success alert with response data
  //       form.reset(); // Reset form fields
  //     })
  //     .catch((error) => {
  //       console.error(error); // Handle error
  //     });
  // }

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <section className="contact space " id="contactme">
        <Container>
          <div className="">
            <Row className="flex flex-col justify-center items-center md:flex-row p-5">
              <Col
                size={12}
                md={6}
                className="md:w-3/5 lg:p-3px tracking-wider wow slideInLeft"
              >
                <img
                  src={contactImg}
                  alt="Contact Us"
                  className="mt-10 pt-10"
                />
              </Col>
              <Col size={12} md={6}>
                <div className="lg:mt-5 mt-5 mr-10 justify-self-center md:justify-center">
                  <div className="Name uppercase text-4xl text-blue-600 mb-5 font-bold wow rotateIn">
                    Get In touch
                  </div>
                  <form onSubmit={handleSubmits}>
                    <div className="flex flex-wrap -mx-1 wow slideInRight">
                      <div className="w-full sm:w-1/2 px-1">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-1">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-1">
                      <div className="w-full sm:w-1/2 px-1">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-1">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone No"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-1">
                      <textarea
                        rows="6"
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <button
                        className="bg-gradient-to-r from-[#005eff] to-blue-400 text-white font-bold py-2 px-14 rounded-md hover:from-pink-500 hover:to-yellow-500 wow bounceIn cursor-pointer"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                {status.message && (
                  <Col className="mt-3 text-bold text-lg text-green-500"> 
                      {status.message}
                  </Col>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ContactUs;

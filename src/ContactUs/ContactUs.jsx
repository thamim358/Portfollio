import React, { useState, useEffect } from "react";
import "../Header/Header.scss";
import "./ContactUs.scss";
import WOW from "wow.js";
import contactImg from "../img/contact-img.svg";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";

function ContactUs() {
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
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log(formData);
  // };
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_jgfsuqn",
  //       "template_n2jqcc6",
  //       form.current,
  //       "yG7XtxVoGKsFafIuG"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         console.log("messages sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    axios
      .post("http://localhost/contactus/contact.php", data)
      .then((response) => {
        console.log(response.data); // Handle success response
        window.alert("Success: " + response.data); // Display success alert with response data
        form.reset(); // Reset form fields
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  }

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <section className="contact space mt-5" id="contactme">
        <Container>
          <div className="flex flex-col md:flex-row">
            <Row className="flex flex-col md:flex-row p-5">
              <Col
                size={12}
                md={6}
                className="md:w-3/5 lg:p-3px tracking-wider mt-10 "
              >
                <img
                  src={contactImg}
                  alt="Contact Us"
                  className="mt-10 pt-10"
                />
              </Col>
              <Col size={12} md={6}>
                <div className="lg:mt-10 mt-5 mr-10 justify-self-center md:justify-center">
                  <div className="Name uppercase text-4xl text-blue-600 mt-5 pt-5 font-bold wow rotateIn">
                    Get In touch
                  </div>
                  <form onSubmit={handleSubmits}>
                    <Row className="mt-5">
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone No"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="6"
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <button className="hover:text-white" type="submit">
                        Submit
                      </button>
                    </Col>
                    {/* {
                status.message &&
                <Col>
                  <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                </Col>
              } */}
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* <div
        className=" flex justify-center items-center text-4xl lg:text-6xl  text-orange-600 flex-col font-bold text-center p-5 wow rotateIn"
        id="volunteer"
      >
        VOLUNTEER
      </div>
      <div className="flex  justify-center items-center p-5 ">
        <form
          onSubmit={handleSubmits}
          className="p-8 shadow-field w-full max-w-md bg-white rounded-lg  shadow-lg "
        >
          <div className="text-xl font-light text-gray-800 mb-4 ">
            Join the Team!
          </div>
          <div className="flex space-x-2">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              A few words about how you would like to help
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dropdown"
            >
              Would you like a yard sign?
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dropdown"
              name="dropdown"
              value={formData.dropdown}
              onChange={handleChange}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
      {/* end contact  */}
      {/* donnation */}
      {/* <div className=" bg-gray-100 p-5  ">
        <div
          className=" flex justify-center items-center text-4xl lg:text-6xl  text-orange-600 flex-col font-bold text-center p-5 wow rotateIn"
          id="donate"
        >
          CONTRIBUTE
        </div>
        <div className="flex justify-center items-center mt-5 mx-auto">
          <Helmet>
            <script
              src="https://donorbox.org/widget.js"
              paypalExpress="false"
            />
          </Helmet>
          <iframe
            src="https://donorbox.org/embed/election-campaign"
            name="donorbox"
            allowpaymentrequest="allowpaymentrequest"
            seamless="seamless"
            frameBorder="0"
            scrolling="no"
            height="900px "
            width="100%"
            style={{
              maxWidth: "500px",
              minWidth: "250px",
              maxHeight: "none!important",
            }}
          />
        </div>
      </div> */}
    </>
  );
}

export default ContactUs;

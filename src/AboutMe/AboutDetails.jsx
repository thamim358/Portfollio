import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AboutDetails() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <Header />
      <div className="section" id="aboutsection">
        <div className="py-10 px-5 lg:mx-12">
          <div className="text-center text-5xl text-blue-800 text-black font-extrabold wow fadeInUp">
            ABOUT
          </div>
          <div className="text-left text-3xl text-black font-extrabold mt-10">
            About SRM Institute of Science and Technology
          </div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            SRM Institute of Science and Technology (formerly known as SRM
            University) is one of the top ranking Universities and most premier
            engineering destinations in India, which was established in 1985 by
            the Founder Chancellor, Dr. T.R. Paarivendhar, SRM Institute of
            Science and Technology and now it is functioning in five campuses
            located at Kattankulathur, Vadapalani and Ramapuram in Tamil Nadu ,
            the fourth campus at Modi Nagar, Ghaziabad and the fifth campus at
            Amaravathi, Andhra Pradesh with over 38,000 students and 2,600
            facultymembers.
          </p>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            Essentially a hub of bustling student activities, the green and
            beautiful campus has been a second-home to thousands of students in
            their journey to pursue higher education. The Institution has moved
            up through international alliances and collaborative initiatives to
            achieve global excellence. SRM Institute of Science and Technology's
            International Advisory Board (IAB) is actively involved in building
            a stronger international dimension in research and teaching
            methodology, which creates avenues for research and successful
            careers. The SRM Institute of Science and Technology also
            collaborates with foreign Universities like MIT, Carnegie Mellon
            University (CMU), Pittsburg University etc. offering a postgraduate
            academic program MSIT-ESE. Over 150 students sponsored to 35 foreign
            Universities like MIT, Carnegie Mellon, UC Davis, Warwick and
            Western Australia.
          </p>
          <div className="text-left text-3xl text-black font-extrabold mt-5 wow fadeInUp">
            Infrastructure
          </div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            Vadapalani Campus of SRM Institute of Science and Technology
            (formerly known as SRM University) is located in a sprawling campus
            of more than 5 acres and located at the heart of the metropolitan
            city of Chennai. It is well connected by road, rail and air. Apart
            from the public transport, college buses are also available for
            transporting the staff and students from various places of the city.
            The campus hosts well planned Academic blocks, computer centre,
            lecture halls, library, laboratories, conference hall, hostel and
            Canteen. Campus is enabled with Wi Fi facility. All class rooms are
            equipped with centralized Air conditioning, LCD projectors,
            ergonomic designed sitting tables for students. Campus has the
            corporate ambiance. All the laboratories are equipped to meet the
            standards of engineering education which will definitely kindle
            innovation and research in the young minds leading to all round
            development.
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">Vision</div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            To emerge as a World - Class University in creating and
            disseminating knowledge, and providing students a unique learning
            experience in science, technology, medicine, management and other
            areas of scholarship that will best serve the world and betterment
            of mankind.
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">Mission</div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            <li>
            MOVE UP through international alliances and collaborative initiatives to achieve global excellence.
            </li>
            <li>
            ACCOMPLISH A PROCESS to advance knowledge in a rigorous academic and research environment.
            </li>
            <li>
            ATTRACT AND BUILD PEOPLE in a rewarding and inspiring environment by fostering freedom, empowerment, creativity and innovation.
            </li>
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">Research at SRM</div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
          SRM is committed to creation of knowledge through research across all academic disciplines. Focus areas include Nanotechnology, Bio engineering, Info, Energy, Environment, Materials and Embedded systems. Joint research project on rural healthcare, in collaboration with Queen's University, Canada.
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">Research Institute</div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
          SRM Research Institute, a Unit of the university, has been established to catalyze proactive applied research to help solve industry's technical problems and is positioned to address and contribute to the market and society needs. It focuses on four domains - Education to research, and develop tools and techniques to address the needs of a university, faculty members, students, and prospective students, Wireless Healthcare to research and propose solutions in the area of Telemedicine, Multimedia for comprehensive and supportive audio, video, and text processing, and Next Generation Networks.
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">About the Department</div>
          <p className="text-base text-gray-500 mt-4">
          The department balances the practical and theoretical aspects of computer science and provides students with a background for professional employment or further study in discipline. The department provides both comprehensive foundation and the specialized skills to seek out creative solutions in a fast-paced technological age.
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">Department Vision</div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
          To offer up to date and flexible programs that will enable our graduates to be competitive in the job market. We strive to provide a hands-on approach in teaching computer related courses. And to this end, we are increasing the capacity of our computer laboratories as well as equipping them with the latest in hardware and software.
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">Department Mission</div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
          To provide outstanding education and research training to our students - for productive careers in industry, academia, and the government. We strive for excellence in research, teaching and service, covering the fundamental as well as applied aspects of computer science. Our efforts include
          <li>
          Establishing nationally and internationally recognized research programs, including those of interdisciplinary nature.
            </li>
            <li>
            Helping our students to develop the skills involved in solving complex technological problems of modern society.
            </li>
            <li>
            Providing a framework for promoting collaborative and multidisciplinary activities.
            </li>
          </p>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
          At SRM Institute of Science and Technology (formerly known as SRM University), the teaching environment is one that emphasizes depth, originality and critical thinking. The department also promotes innovative research and education programs in core computer science as well as multidisciplinary application areas. Upon graduation, our students will be able to perform research in all branches of the computing field.
          </p>
         
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default AboutDetails;

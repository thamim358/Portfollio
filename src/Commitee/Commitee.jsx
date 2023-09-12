import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const Commitee = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
    window.scrollTo(0, 0);
  }, []);
  const chiefPatrons = [
    {
      name: "Dr. T. R. Paarivendhar",
      designation:
        "Founder Chancellor, SRM Institute of Science and Technology",
    },
    {
      name: "Dr. Ravi Pacha Moothoo",
      designation:
        "Pro-Chancellor Administration, SRM Institute of Science and Technology",
    },
    {
      name: "Dr. P. Sathyanarayanan",
      designation:
        "Pro-Chancellor Academics, SRM Institute of Science and Technology",
    },
    {
      name: "Ms. Harini Ravi",
      designation:
        "Correspondent, Valliammai Engineering College & SRM Arts and Science College",
    },
  ];
  const hod = [
    {
      name: "Dr. A. Meenakshi",
      designation:
        "Professor & Head, Department of Computer Science And Application (MCA) SRM Institute of Science and Technology Vadapalani Campus",
    },
    {
      name: "Dr. V. Raja",
      designation:
        "Professor & Head, Department of Computer Science And Application SRM Institute of Science and Technology Vadapalani Campus",
    },
  ];

  const professors = [
    {
      name: "Mr. M. Ramesh",
      designation: "Assistant Professor, Department of CSH, SRMIST",
    },
    {
      name: "Dr. LV. Raja",
      designation: "Assistant Professor, Department of CSH, SRMIST",
    },
    {
      name: "Mr. M. Murali Anand",
      designation: "Assistant Professor Department of CSH, SRMIST",
    },
    {
      name: "Mr. J. Parthasarathi",
      designation: "Assistant Professor Department of CSH, SRMIST",
    },
    {
      name: "Dr. K. Sriprasadh",
      designation: "Assistant Professor Department of CSH, SRMIST",
    },
    {
      name: "Dr. N. Mariappan",
      designation: "Assistant Professor Department of CSH, SRMIST",
    },
    {
      name: "Dr. Jenita Mary",
      designation: "Assistant Professor Department of CSH, SRMIST",
    },
    {
      name: "Dr. K. Sriprasadh",
      designation: "Assistant Professor Department of CSH, SRMIST",
    },
    {
      name: "Dr. Supriya Arunachalam",
      designation: "Assistant Professor Department of CSH, SRMIST",
    },
    {
      name: "Mrs. Shameem Sulthana",
      designation: "Assistant Professor Department of CSH, SRMIST",
    },
    {
      name: "Mrs. S. Parimala",
      designation: "Assistant Professor Department of CSH, SRMIST",
    },
  ];
  const additionalProfessors = [
    {
      name: "Dr. C. Muthamizhchelvan",
      designation: "Vice Chancellor SRM Institute of Science and Technology",
    },
    {
      name: "Dr. S. Ponnusamy",
      designation: "Registrar, SRM Institute of Science and Technology",
    },
    {
      name: "Dr. S. Ramachandran",
      designation:
        "Director (Academics), SRM Institute of Science and Technology",
    },
    {
      name: "Mr. K Megraj",
      designation: "Director (Admin), SRM Institute of Science and Technology",
    },
    {
      name: "Dr. KR. Anatha Padmanadan",
      designation:
        "Dean (FSH), SRM Institute of Science and Technology Vadapalani Campus",
    },
    {
      name: "Dr. K. Gunasekaran",
      designation:
        "Controller of Examination, SRM Institute of Science and Technology",
    },
  ];

  return (
    <>
      <Header />
      <div className="section" id="aboutsection">
        <div className="py-10 px-5  lg:mx-20">
          <div className="text-center text-5xl text-black font-extrabold wow fadeInUp">
            Committee
          </div>
          <div className="mt-10">
            <div className="rounded-lg drop-shadow-xl bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-center mt-5">
              <div className="text-white font-black text-4xl wow fadeInUp">
                Chief Patrons
              </div>
            </div>
            <div className="flex mt-10 justify-center wow fadeInUp">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-7">
                {chiefPatrons.map((patron, index) => (
                  <div
                    key={index}
                    className="p-5 text-black rounded-lg drop-shadow-lg bg-white hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white wow fadeInUp "
                  >
                    <div className="text-3xl text-center  font-extrabold ">
                      {patron.name}
                    </div>
                    <div className="text-base text-center  font-bold mt-3">
                      {patron.designation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" mt-10">
            <div className=" rounded-lg drop-shadow-xl bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-center mt-5">
              <div className="text-white font-black text-4xl wow fadeInUp">
                Patrons
              </div>
            </div>
            <div className="flex mt-10 justify-center wow fadeInUp">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-7">
                {additionalProfessors.map((professor, index) => (
                  <div
                    key={index}
                    className="p-5 text-black rounded-lg drop-shadow-lg bg-white hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white wow fadeInUp "
                  >
                    <div className="text-3xl text-center  font-extrabold ">
                      {professor.name}
                    </div>
                    <div className="text-base text-center  font-bold mt-3">
                      {professor.designation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-10">
            <div className=" rounded-lg drop-shadow-xl bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-center mt-5">
              <div className="text-white font-black text-4xl wow fadeInUp">Convener</div>
            </div>
            <div className="flex mt-10 justify-center wow fadeInUp">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-7">
                {hod.map((professor, index) => (
                  <div
                    key={index}
                    className="p-5 text-black rounded-lg drop-shadow-lg bg-white hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white wow fadeInUp "
                  >
                    <div className="text-3xl text-center  font-extrabold ">
                      {professor.name}
                    </div>
                    <div className="text-base text-center  font-bold mt-3">
                      {professor.designation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-10">
            <div className=" rounded-lg drop-shadow-xl bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-center mt-5">
              <div className="text-white font-black text-4xl wow fadeInUp">
                Organising Secretaries
              </div>
            </div>
            <div className="flex mt-10 justify-center wow fadeInUp ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  lg:gap-7">
                <div className="p-5 text-black rounded-lg drop-shadow-lg bg-white hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white wow fadeInUp ">
                  <div className="text-3xl text-center  font-extrabold ">
                    Dr. J.Anitha Ruth
                  </div>
                  <div className="text-base text-center  font-bold mt-3">
                    Assistant Professor(Sr.G) , Department of Computer Science
                    And Application (MCA), SRMIST
                  </div>
                </div>
                <div className="p-5 text-black rounded-lg drop-shadow-lg bg-white hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white wow fadeInUp">
                  <div className="text-3xl text-center  font-extrabold ">
                    Dr.M.Sivasakthi
                  </div>
                  <div className="text-base text-center  font-bold mt-3">
                    Assistant Professor(Sr.G) , Department of Computer Science
                    And Application (MCA), SRMIST
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10">
            <div className=" rounded-lg drop-shadow-xl bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-center mt-5">
              <div className="text-white font-black text-4xl wow fadeInUp">
                Committee
              </div>
            </div>
            <div className="flex mt-10 justify-center wow fadeInUp">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  lg:gap-7 ">
                {professors.map((professor, index) => (
                  <div
                    key={index}
                    className="p-5 text-black rounded-lg drop-shadow-lg bg-white hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white wow fadeInUp "
                  >
                    <div className="text-3xl text-center  font-extrabold ">
                      {professor.name}
                    </div>
                    <div className="text-base text-center  font-bold mt-3">
                      {professor.designation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Commitee;

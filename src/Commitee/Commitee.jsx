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
        "Founder Chancellor, SRMIST",
    },
    {
      name: "Dr. Ravi Pacha Moothoo",
      designation:
        "Pro-Chancellor Administration, SRMIST",
    },
    {
      name: "Dr. P. Sathyanarayanan",
      designation:
        "Pro-Chancellor Academics, SRMIST",
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
        "Assistant Professor(Sr.G) & Head, Department of Computer Science and Applications (M.C.A) SRMIST Vadapalani Campus",
    },

  ];
  const coconverner = [

    {
      name: "Dr. V. Raja",
      designation:
      "Assistant Professor & Head, Department of Computer Science and Applications SRMIST Vadapalani Campus",
  },
  ];
  const professors = [
    {
      name: "Mr. M. Ramesh",
      designation: "Assistant Professor, Department of CSA, SRMIST",
    },
    {
      name: "Dr. L.V. Raja",
      designation: "Assistant Professor, Department of CSA, SRMIST",
    },
    {
      name: "Mr. M. Murali Anand",
      designation: "Assistant Professor, Department of CSA, SRMIST",
    },
    {
      name: "Mr. J. Parthasarathi",
      designation: "Assistant Professor,Department of CSA, SRMIST",
    },
    {
      name: "Dr. K. Sriprasadh",
      designation: "Assistant Professor, Department of CSA, SRMIST",
    },
    {
      name: "Dr. N. Mariappan",
      designation: "Assistant Professor, Department of CSA, SRMIST",
    },
    {
      name: "Mrs. Jenita Mary",
      designation: "Assistant Professor, Department of CSA, SRMIST",
    },
    {
      name: "Dr. Supriya Arunachalam",
      designation: "Assistant Professor, Department of CSA, SRMIST",
    },
    {
      name: "Mrs. Shameem Sulthana",
      designation: "Assistant Professor Department of CSA, SRMIST",
    },
    {
      name: "Mrs. S. Parimala",
      designation: "Assistant Professor, Department of CSA, SRMIST",
    },
  ];
  const additionalProfessors = [
    {
      name: "Dr. C. Muthamizhchelvan",
      designation: "Vice Chancellor SRMIST",
    },
    {
      name: "Dr. S. Ponnusamy",
      designation: "Registrar, SRMIST",
    },
    {
      name: "Dr. K. Gunasekaran",
      designation:
        "Controller of Examination, SRMIST",
    },
    {
      name: "Dr. S. Ramachandran",
      designation:
        "Director (Academics), SRM Group ",
    },
    {
      name: "Mr. K Megraj",
      designation: "Director (Admin), SRM Group",
    },
    {
      name: "Dr. K.R. Anandapadmanaban",
      designation:
        "Dean (CSH), SRMIST Vadapalani Campus",
    },
   
  ];

  return (
    <>
      <Header />
      <div className="section" id="aboutsection">
        <div className="py-10 px-5  lg:mx-20">
          <div className="text-center text-5xl text-blue-800 font-extrabold wow fadeInUp uppercase">
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
              <div className=" lg:mx-24 flex justify-center   lg:gap-7">
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
          {/* <div className=" mt-10">
            <div className=" rounded-lg drop-shadow-xl bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-center mt-5 justify-center ">
              <div className="text-white font-black text-4xl wow fadeInUp"> Co-Convener</div>
            </div>
            <div className="flex justify-center mt-10 wow fadeInUp">
              <div className="  lg:mx-24 flex justify-center   lg:gap-7">
                {coconverner.map((professor, index) => (
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
          </div> */}
          <div className=" mt-10">
            <div className=" rounded-lg drop-shadow-xl bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-center mt-5">
              <div className="text-white font-black text-4xl wow fadeInUp">
                Organizing Secretaries
              </div>
            </div>
            <div className="flex mt-10 justify-center wow fadeInUp ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  lg:gap-7">
                <div className="p-5 text-black rounded-lg drop-shadow-lg bg-white hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white wow fadeInUp ">
                  <div className="text-3xl text-center  font-extrabold ">
                    Dr. J.Anitha Ruth
                  </div>
                  <div className="text-base text-center  font-bold mt-3">
                    Assistant Professor(Sr.G), Department of Computer Science
                    And Applications (M.C.A), SRMIST
                  </div>
                </div>
                <div className="p-5 text-black rounded-lg drop-shadow-lg bg-white hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white wow fadeInUp">
                  <div className="text-3xl text-center  font-extrabold ">
                    Dr.M.Sivasakthi
                  </div>
                  <div className="text-base text-center  font-bold mt-3">
                    Assistant Professor , Department of Computer Science
                    And Applications (M.C.A), SRMIST
                  </div>
                </div>
               
              
              </div>
            </div>
            <div className="p-5 text-black rounded-lg drop-shadow-lg bg-white hover:bg-gradient-to-r from-blue-700 to-blue-500 mt-4 hover:text-white wow fadeInUp">
                  <div className="text-3xl text-center  font-extrabold ">
                  Dr. V. Raja
                  </div>
                  <div className="text-base text-center  font-bold mt-3">
                  Assistant Professor & Head, Department of Computer Science and Applicationss SRMIST Vadapalani Campus
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

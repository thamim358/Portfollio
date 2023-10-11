import React, { useEffect } from "react";
import "../Header/Header.scss";
import journal from "../img/Journal-Template.docx";
import WOW from "wow.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const PaperSubmission = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="mx-3 lg:mx-12 px-5 sm:mx-3">
        <div className="py-10  wow fadeInUp">
          <div className="text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-800 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
            Paper Submission
          </div>

          <div className="text-left text-3xl text-black font-extrabold mt-5 wow fadeInUp">
            Submission
          </div>
          <p
            className="text-base text-gray-500 mt-4 wow fadeInUp"
            style={{ textAlign: "justify", textJustify: "auto" }}
          >
            Authors submitting research papers must ensure that their work is
            both original and previously unpublished, written exclusively in
            English, and presented in PDF format. Papers are subject to a strict
            limit of 8 pages.
          </p>
          <p
            className="text-base text-gray-500 mt-4 wow fadeInUp"
            style={{ textAlign: "justify", textJustify: "auto" }}
          >
            Plagiarism must be avoided, as papers will be screened for a maximum
            similarity of 10%.Paper should be in IEEE format Simultaneous
            submission of the same paper to multiple venues, or submitting a
            paper with significant overlap that has been published or is under
            consideration elsewhere, is strictly prohibited. These guidelines
            emphasize the importance of ethical and original research
            contributions while maintaining standards for rigorous academic
            publication.
          </p>
          <div className="mt-7  text-center ">
            <div className=" text-sm sm:text-sm lg:text-xl font-sans font-black py-5 wow fadeInUp overflow-x-auto">
              Submit your Papers in the link: {""}
              <span>
                <a
                  href="https://forms.gle/2TG8dEXEsiJ1t2TFA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-sm sm:text-sm lg:text-xl text-blue-800 max-w-full truncate "
                >
                  https://forms.gle/2TG8dEXEsiJ1t2TFA
                </a>
              </span>
            </div>
          </div>
          <div className="">
            <div className="text-left text-3xl text-black font-extrabold mt-5 wow fadeInUp">
              Manuscript Preparation
            </div>
            <p className="text-base text-gray-500 mt-4 wow fadeInUp">
              <span className="font-bold text-black">Document Format: </span>
              Manuscripts should be prepared using the provided
              <a className="" href={journal} download="Journal" target="_blank">
                <span className="text-[#005eff] "> (.docx)</span>
              </a>{" "}
              The template ensures consistency and ease of formatting.
            </p>
            
            <p
              className="text-base text-gray-500 mt-4 wow fadeInUp"
              style={{ textAlign: "justify", textJustify: "auto" }}
            >
                <span className="font-bold text-black">Figures and Tables:  </span>
              All figures, graphs, and plots within the manuscript must have
              good resolution, preferably 600 dpi or higher. Tables should not
              be in pictorial format. Text within figures should be legible and
              preferably of equal size to the text within the article.
            </p>
            <p
              className="text-base text-gray-500 mt-4 wow fadeInUp"
              style={{ textAlign: "justify", textJustify: "auto" }}
            >
              <span className="font-bold text-black">Author Information </span>
             Include the full address, affiliation, and email address of all authors. Designate a corresponding author and provide their corresponding email address. This email address will be used for proofreading communication after acceptance.
            </p>
            <p
              className="text-base text-gray-500 mt-4 wow fadeInUp"
              style={{ textAlign: "justify", textJustify: "auto" }}
            >
              <span className="font-bold text-black">Author Information:</span>
              Do not include social or academic titles (e.g., Mr., Ms., Dr.,
              Prof.) preceding author names. Avoid specifying academic positions
              (e.g., research scholar, student, assistant professor, professor).
            </p>
            <p
              className="text-base text-gray-500 mt-4 wow fadeInUp"
              style={{ textAlign: "justify", textJustify: "auto" }}
            >
              <span className="font-bold text-black">Language and Style:  </span>
              Manuscripts must be written in English that has been spell-checked and is grammatically correct. Ensure that the text is free from typographical and grammatical errors.
            </p>
            <p
              className="text-base text-gray-500 mt-4 wow fadeInUp"
              style={{ textAlign: "justify", textJustify: "auto" }}
            >
              <span className="font-bold text-black">Page Numbers and Running Head:</span>
              Do not include page numbers in the manuscript, and do not provide a running head title.
            </p>
            <p
              className="text-base text-gray-500 mt-4 wow fadeInUp"
              style={{ textAlign: "justify", textJustify: "auto" }}
            >
              <span className="font-bold text-black">References:  </span>
              Carefully adhere to the referencing style as specified in the Paper Template. References should include author name(s), title of the article/book, conference/journal name, volume, issue, page numbers, and publication year.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// export default PaperSubmission;

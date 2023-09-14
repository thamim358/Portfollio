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
          <div className="text-4xl sm:text-4xl  lg:text-5xl uppercase  text-blue-600 mx-5 sm:mx-5 font-bold text-center wow fadeInUp">
            Paper Submission
          </div>

          <div className="text-left text-3xl text-black font-extrabold mt-5 wow fadeInUp">
            Submission
          </div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            A submission should report an original, previously unpublished
            research that is not being concurrently considered elsewhere for
            publication in a journal or conference, written in English.
            Electronic version of the paper must be submitted only in pdf, no
            other format will be accepted. The papers should be strictly limited
            to 8 pages (up to 2 extra pages is permitted with extra page charges
            payable at the time of registration). The page limit includes title
            page, references, figures, and tables.
          </p>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            Plagiarism MUST be avoided while preparing the paper. The papers
            would be initially scanned for similarity index [SI] before
            undergoing the review process. Maximum acceptable SI is 15%
            scattered over the paper. Simultaneous submission of the same paper
            or submission of a published/submitted paper with considerable
            overlap is strictly prohibited as it leads to erroneous SI report
            and copyright violation
          </p>
          <div className="mt-7  items-center text-center ">
            <div className="sm:text-base lg:text-xl font-sans font-black py-5 wow fadeInUp">
              Submit your article in the link{" "}
              <span>
              <a
                href="https://cmt3.research.microsoft.com/NCTSconf2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005eff] inline-block max-w-full truncate   "
              >
                https://cmt3.research.microsoft.com/NCTSconf2023
              </a>
              </span>
            </div>
          </div>
          <div className="">
            <div className="text-left text-3xl text-black font-extrabold mt-5 wow fadeInUp">
              Manuscript Preparation
            </div>
            <p className="text-base text-gray-500 mt-4 wow fadeInUp">
              The manuscript should be prepared in the following Journal format
              using
              <a className="" href={journal} download="Journal" target="_blank">
                <span className="text-[#005eff] "> (.docx)</span>
              </a>{" "}
              template.
            </p>
            <p className="text-base text-gray-500 mt-4 wow fadeInUp">
              The figures / graphs / plots in the manuscript MUST be of good
              resolution (600 dpi or more), tables MUST NOT be in pictorial
              format. Text in figures should not be too small, and preferably of
              equal size as text of the article.
            </p>
            <p className="text-base text-gray-500 mt-4 wow fadeInUp">
              Do NOT use any Social / Academic titles (e.g. Mr.,Ms.,Dr.,Prof.
              etc) preceding the author names. Do NOT mention the position of a
              person (e.g., research scholar, student, assistant professor,
              professor, IEEE member, IEEE student member etc.) in the
              affiliation.
            </p>
            <p className="text-base text-gray-500 mt-4 wow fadeInUp">
              Mention full address, affiliation, and email of ALL authors,
              specify a corresponding author with the corresponding e-mail ID.
              [Once an article is accepted, the publisher will send the
              proofreading of article to this e-mail]
            </p>
            <p className="text-base text-gray-500 mt-4 wow fadeInUp">
              Articles must be written in spell checked and grammatically
              correct English. Do not make any page numbering and do not give
              any running head title.
            </p>
            <p className="text-base text-gray-500 mt-4 wow fadeInUp">
              Deeply verify the referencing styles of the Paper Template, which
              will help to produce correct reference format. A reference should
              bear following parameters in proper format: author name(s), title
              of article/book, conference/journal name, volume, issue, page
              numbers, publication year.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// export default PaperSubmission;

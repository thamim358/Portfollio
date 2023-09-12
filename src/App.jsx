import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import AboutDetails from "./AboutMe/AboutDetails";
import Publications from "./Publications/Publications";
import Commitee from "./Commitee/Commitee";
import { PaperSubmission } from "./Paper Submission/PaperSubmission";
import Register from "./Registration/Register";
import Contact from "./Contact/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutDetails />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/committee" element={<Commitee />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React ,{ useEffect }from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import AboutDetails from "./AboutMe/AboutDetails";
import Publications from "./Publications/Publications";
import Commitee from "./Commitee/Commitee";
import { PaperSubmission } from "./Paper Submission/PaperSubmission";
import Register from "./Registration/Register";
import Contact from "./Contact/contact";
import Events from "./Events/Events";
import { KeyNotes } from "./KeyNotes/KeyNotes";


function App() {
  useEffect(() => {
    function handlePageShow(event) {
      if (event.persisted) {
        window.location.reload();
      }
    }
  
    window.addEventListener('pageshow', handlePageShow);
    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);
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
          <Route path="/event" element={<Events />} />
          <Route path="/keynotes" element={<KeyNotes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

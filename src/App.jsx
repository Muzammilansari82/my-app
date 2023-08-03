import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Check from './Project/Check';
// import StepOne from './Project/StepOne';
// import { StepTwo } from './Project/StepTwo';
import Name from "./Project/Name";
import Project from "./Project/Project";
import Parent from "./Lets/Parent";
import About from "./Project/About";
import Contact from "./Project/contact";
import Inbox from "./Project/Inbox";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/inbox" element={<Inbox />} /> {/* Use InboxComponent to avoid duplicates */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="check" element={<Parent />} />
        <Route path="project" element={<Project />} /> {/* Change "Project" to "project" for consistency */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

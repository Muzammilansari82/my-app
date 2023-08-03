import React, { useState } from "react";
import StepSeven from "./StepSeven";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepOne from "./StepOne";
import Project from "./Project";
import DropDown from "./DropDown";
// import Cross from "../assets/Cross";
// import logo from "./assets/logoWhite.png";
// import logo from "../assets/logo.png";
import "./style.css";

const SimpleModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [modalCompleted, setModalCompleted] = useState(false);
  // const [fullName, setFullName] = useState("");
  // const [companyName, setCompanyName] = useState("");

  const steps = [
    { stepNumber: 1, component: <StepOne /> },
    { stepNumber: 2, component: <StepTwo /> },
    { stepNumber: 3, component: <StepThree /> },
    { stepNumber: 4, component: <StepFour /> },
    { stepNumber: 5, component: <StepFive /> },
    { stepNumber: 6, component: <StepSix /> },
    { stepNumber: 7, component: <StepSeven /> },
  ];

  const handleOpenModal = () => {
    setCurrentStep(0);
    setModalCompleted(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalCompleted(false);
  };

  const handleNextStep = () => {
    const nextStep = currentStep + 1;

    if (nextStep === steps.length) {
      setShowModal(false);
      setModalCompleted(true);
    } else {
      setCurrentStep(nextStep);
    }
    if (modalCompleted) {
      return <Project />;
    }
  };

  return (
    <div>
      <nav>
        <span className="navbar-list">
          <DropDown />
        </span>
      </nav>

      <div className="modal-btn-bg">
        <button type="button" onClick={handleOpenModal} className="modal-btn ">
          Start Project
        </button>
        {showModal && (
          <div className="modal-wrapper" id="myModal">
            <div className="modal border">
              <div className="modal-dialog content">
                <div className="content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close cross"
                      id="closeModal"
                      aria-label="Close"
                      onClick={handleCloseModal}
                    >
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="modal-body">
                    {steps.map(
                      (step, index) =>
                        index === currentStep && (
                          <div key={step.stepNumber}>{step.component}</div>
                        )
                    )}
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="btn1"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {modalCompleted && (
        <div>
          <div>
            <Project />
          </div>
          <div>
            {/* {localStorage.getItem('dataofStepOne')}<br />  
             {localStorage.getItem('stepFiveContact')} <br />
             {localStorage.getItem('DataOfStepFourp3')}
             {localStorage.getItem('DataOfStepFourp4')}
             {localStorage.getItem('DataOfStepFourp5')}
              {localStorage.getItem('DataOfStepFourp6')}<br /> 
             {localStorage.getItem('DataOfStepFourp1')}<br />
             {localStorage.getItem('DataOfStepFourp2')}*/}
          </div>
        </div>
      )}
      <div
        className="flex"
        style={{ justifyContent: "center", marginLeft: "-450px" }}
      >
        <div className="Home">
          <h1>
            Welcome to <span style={{ color: "wheat" }}> <span style={{ color: "wheat" }}> Project Pulse</span>{" "}</span>{" "}
            Your All-in-One Project Management Tool!
          </h1>
          <h1>Simplify. Collaborate. Succeed.</h1>
          <h1>Why <span style={{ color: "wheat" }}> <span style={{ color: "wheat" }}> Project Pulse</span>{" "}</span>{" "}?</h1>
          <p>
            Managing projects has never been this easy. With <span style={{ color: "wheat" }}> <span style={{ color: "wheat" }}> Project Pulse</span>{" "}</span>{" "},
            experience the perfect blend of simplicity and efficiency. Our
            feature-rich platform offers everything your team needs to stay
            organized, focused, and ahead of the competition.
          </p>
          <h1>Intuitive Interface:</h1>
          <p>
            <span style={{ color: "wheat" }}> Project Pulse</span>{" "} boasts an intuitive user interface that minimizes the
            learning curve and maximizes productivity. Spend less time on
            mastering complex tools and more time on getting things done.
          </p>
          <h1>Seamless Collaboration:</h1>
          <p>
            Effortlessly collaborate with your team members in real-time. Share
            ideas, files, and feedback, ensuring everyone stays in the loop and
            aligned with the project's objectives.
          </p>
          <h1>Task Management Made Smart:</h1>
          <p>
            Tired of missed deadlines and chaotic task lists? Our smart task
            management system helps you stay on top of your to-do list and
            ensures no task falls through the cracks.
          </p>
          <h1>Insightful Analytics:</h1>
          <p>
            Data-driven decisions lead to better outcomes. Leverage our powerful
            analytics to gain valuable insights into your project's progress and
            optimize your workflow.
          </p>
          <h1>Security at Its Core:</h1>
          <p>
            Rest assured, your data is in safe hands. We prioritize the security
            and confidentiality of your information, employing advanced
            encryption and security measures.
          </p>
          <h1>Customizable for Your Needs:</h1>
          <p>
            No two projects are the same. <span style={{ color: "wheat" }}> Project Pulse</span>{" "} can be tailored to suit
            your unique requirements, making project management truly
            personalized.
          </p>
          <h1>Start Your Journey:</h1>
          <p>
            Experience the future of project management. Join thousands of
            satisfied teams who have already made <span style={{ color: "wheat" }}> Project Pulse</span>{" "} their go-to tool
            for success.
          </p>
          Sign up today for a free trial and take control of your projects like
          never before!
          
            
              <li>Elevate Your Project Management Game with <span style={{ color: "wheat" }}> Project Pulse</span>{" "}</li>
              <li>Unleash the Power of Team Collaboration with <span style={{ color: "wheat" }}> Project Pulse</span>{" "} </li>
              <li>Effortless Project Management for Teams of All Sizes </li>
              <li><span style={{ color: "wheat" }}> Project Pulse</span>{" "}: Where Productivity Meets Simplicity</li>
              <li>Realize Your Project Goals with <span style={{ color: "wheat" }}> Project Pulse</span>{" "} by Your Side</li>
              <li>From Chaos to Clarity: Organize Projects with <span style={{ color: "wheat" }}> Project Pulse</span>{" "} </li>
              <li>Empowering Success: <span style={{ color: "wheat" }}> Project Pulse</span>{" "},Your Project Management Ally </li>
              <li>Seize Control of Projects with <span style={{ color: "wheat" }}> Project Pulse</span>{" "}'s Intuitive Tools </li>
              <li>Unlock Efficiency and Innovation with <span style={{ color: "wheat" }}> Project Pulse</span>{" "} </li>
              <li>Project Management Perfected: Discover <span style={{ color: "wheat" }}> Project Pulse</span>{" "} Today</li>
           
          
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;

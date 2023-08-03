import React from "react";
import FirstTask from "./Task";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <h2>{project.name}</h2>
      <p>{project.content}</p>
      <FirstTask /> {/* Assuming this is the task component for the selected project */}
      {/* Add other components or details related to the project */}
    </>
  );
};

export default ProjectDetails;


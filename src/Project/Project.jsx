import React, { useState } from "react";
import FirstTask from "./Task";
import {Link} from 'react-router-dom'
import ProjectDetails from "./ProjectDetails"; // New component for project details

const Project = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "First Project", content: "" },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);

  const addNewProject = () => {
    const newProjectName = prompt("Enter the name of the new project");
    const newProjectContent = ""

    // Check if the user provided a name for the new project
    if (newProjectName && newProjectName.trim() !== "") {
      const newProject = {
        id: projects.length + 1, // Assign a unique ID to the new project
        name: newProjectName,
        content: newProjectContent,
      };

      setProjects((prevProjects) => [...prevProjects, newProject]);
    } else {
      alert("Please provide a valid name for the new project.");
    }
  };

  const deleteProject = (projectId) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="flex-main">
      <div className="part1">
        <div className="flex">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p className="p">Search</p>
        </div>
        <div className="flex">
          <i className="fa-regular fa-bell"></i>
          <p className="p"><Link to='/inbox'>Inbox</Link></p>
        </div>
        <hr />

        <p>Projects</p>
        {projects.map((project) => (
          <div className="flex" style={{ cursor: "pointer" }} key={project.id}>
            <i className="fa-solid fa-clipboard"></i>
            <div className="p" onClick={() => handleProjectClick(project)}>
              {project.name}
            </div>
            <div className="hr">
              <i className="fa-solid fa-trash" onClick={() => deleteProject(project.id)}></i>
            </div>
          </div>
        ))}
        <button onClick={addNewProject} className="button1">
          + Project
        </button>
      </div>
      <div className="part2">
        {selectedProject ? (
          <ProjectDetails project={selectedProject} />
        ) : (
          <p>No project selected.</p>
        )}
      </div>
    </div>
  );
};

export default Project;

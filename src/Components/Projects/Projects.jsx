import "./Projects.css";
import projectData from "./ProjectData";
import { useEffect, useState } from "react";
import ImageLoad from "../ImageLoad";

const Projects = () => {
  const [details, setDetails] = useState({ name: "", desc: "", techStack: [], images: [], placeholder: "" });

  useEffect(() => {
    const detailDiv = document.getElementById("details");
    detailDiv.scrollTop = 0;
  }, [details]);
  return (
    <div id="container">
      <div id="main">
        <div className="main-header">
          <h1>
            My <span className="red-text">Projects</span>
          </h1>
          <p>Click on any project to view details</p>
        </div>
        <div className="projects-container">
          {projectData.map((project, index) => {
            return (
              <div
                key={index}
                className={project.name === details.name ? `project-card active-project card${index}` : `project-card card${index}`}
                onClick={() => setDetails(project.details)}
              >
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noreferrer">
                    View Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="details">
        <h1>{details.name}</h1>
        <p>{details.desc}</p>
        <div className="tech-stack-pills">
          {details.techStack.map((tech, index) => {
            return (
              <p key={index} className="tech-stack-pill">
                {tech}
              </p>
            );
          })}
        </div>
        <div className="image-container">
          {details.images.map((image, index) => {
            return <ImageLoad src={image} placeholder="./Images/Placeholder.jpg" alt="Project" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

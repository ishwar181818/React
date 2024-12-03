import React from "react";
import "./App.css";

const ProjectCard = ({ title, description, link, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-img" />
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

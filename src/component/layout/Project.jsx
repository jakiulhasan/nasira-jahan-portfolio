import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard, { Card } from "../ui/styled-component/ProjectCard";

const Project = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("./projectData.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <ProjectGrid>
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ProjectGrid>
  );
};

export default Project;

/* ================= STYLES ================= */

const ProjectGrid = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  /* Blur and shrink all cards when hovering grid */
  &:hover ${Card} {
    filter: blur(8px);
    transform: scale(0.9);
    opacity: 0.6;
  }

  /* Focus hovered card */
  &:hover ${Card}:hover {
    filter: blur(0);
    transform: scale(1.15);
    opacity: 1;
    z-index: 10;
  }
`;

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
    <div className="max-w-7xl mx-auto px-4 ">
      <div className="font-bold text-3xl text-white">
        Selected <span className="text-emerald-500"> Projects </span>
        <p className="text-xl">
          UI/UX projects focused on usability and clean design
        </p>
      </div>
      <ProjectGrid>
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </div>
  );
};

export default Project;

/* ================= STYLES ================= */

const ProjectGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  /* Blur and shrink all cards when hovering grid */
  &:hover ${Card} {
    filter: blur(8px);
    opacity: 0.6;
  }

  /* Focus hovered card */
  &:hover ${Card}:hover {
    filter: blur(0);
    transform: scale(1.05);
    opacity: 1;
    z-index: 10;
  }
`;

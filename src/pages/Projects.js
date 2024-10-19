import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'A cool web app.' },
    { title: 'Project 2', description: 'A mobile app.' },
    // Add more projects as needed
  ];

  return (
    <ProjectsSection>
      <h1>My Projects</h1>
      <ProjectGrid>
        {projectList.map((project, index) => (
          <ProjectCard key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 4rem;
  background-color: #fff;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const ProjectCard = styled.div`
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 1.5rem;
    color: #333;
  }
  p {
    color: #666;
  }
`;

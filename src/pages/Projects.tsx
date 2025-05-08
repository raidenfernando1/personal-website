import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const Container = styled.main``;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const ProjectsContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
const Projects = () => {
  return (
    <Container>
      <Introduction>
        <Title>Projects</Title>
        <p>
          As a developer I run into problems every day. Whenever possible, I try
          to publish my solutions as open source software so others can benefit
          and build upon them.
        </p>
        <p>
          Some projects are simple PHP packages, others are full blown web
          applications or SaaS products and others are shell scripts to automate
          tedious "borings" tasks.
        </p>
      </Introduction>
      <ProjectsContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;

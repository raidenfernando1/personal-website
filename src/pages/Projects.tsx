import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { projectList } from "../helper/Projects";

const Container = styled.main`
  padding-bottom: 30px;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const ProjectsContainer = styled.ul`
  height: 100%;

  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  > li {
    list-style: none;
  }

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
        {projectList.map((data, index) => {
          return (
            <li key={index}>
              <ProjectCard
                link={data.link}
                title={data.title}
                description={data.description}
              />
            </li>
          );
        })}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;

import styled from "styled-components";
import ProjectsCard from "../../components/ProjectsCard";

const Projects = styled.section`
  padding-block: 50px;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-block: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectsPage = () => {
  return (
    <Projects>
      <h1>Some of my projects</h1>
      <ProjectsContainer>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </ProjectsContainer>
    </Projects>
  );
};

export default ProjectsPage;

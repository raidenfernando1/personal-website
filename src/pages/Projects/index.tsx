import styled from "styled-components";
import ProjectsCard from "../../components/ProjectsCard";

const Projects = styled.section`
  padding-block: 50px;
`;

const ProjectsContainer = styled.div`
  padding-block: 50px;
`;

const ProjectsPage = () => {
  return (
    <Projects>
      <h1>Some of my projects</h1>
      <ProjectsContainer>
        <ProjectsCard />
      </ProjectsContainer>
    </Projects>
  );
};

export default ProjectsPage;

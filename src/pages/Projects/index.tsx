import styled from "styled-components";
import ProjectsCard from "../../components/ProjectsCard";
import ProjectsAssets from "../../assets/ProjectsAssets";
import PageLayout from "../../components/PageLayout";
import { FC } from "preact/compat";

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

const ProjectsPage: FC = () => {
  const ProjectsList = [
    {
      logo: ProjectsAssets.notey,
      name: "Notey",
      description: "A fullstack Note management application hosted in vercel",
    },
    {
      logo: ProjectsAssets.todoCli,
      name: "Fullstack CLI Todo app",
      description:
        "A fullstack CLI Todo application built using javascript and node",
    },
  ];

  return (
    <PageLayout paddingBlock="100px">
      <h1>Some of my projects</h1>
      <ProjectsContainer>
        {ProjectsList.map((projects) => (
          <ProjectsCard
            logo={projects.logo}
            title={projects.name}
            desc={projects.description}
          />
        ))}
      </ProjectsContainer>
    </PageLayout>
  );
};

export default ProjectsPage;

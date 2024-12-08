import styled from "styled-components";

const ProjectsCardStyle = styled.div`
  display: flex;
  border: 1px solid white;
  align-items: center;
  gap: 10px;
  padding: 5px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    transform: translateY(-7%);
  }
`;

const ProjectsDescription = styled.div`
  > h1 {
    font-size: 1rem;
    font-weight: 600;
  }

  > p {
    font-size: 1rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  > img {
    padding: 5px;
    width: 50px;
    background-color: rgb(50, 50, 50);
  }
`;

interface ProjectsCardProps {
  logo: string;
  title: string;
  desc: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ logo, title, desc }) => {
  return (
    <ProjectsCardStyle>
      <ImageWrapper>
        <img src={logo} />
      </ImageWrapper>
      <ProjectsDescription>
        <h1>{title}</h1>
        <p>{desc}</p>
      </ProjectsDescription>
    </ProjectsCardStyle>
  );
};

export default ProjectsCard;

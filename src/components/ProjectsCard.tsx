import styled from "styled-components";
import notey from "../assets/ProjectsAssets/notey/logo.svg";

const ProjectsCardStyle = styled.div`
  display: flex;
  border: 1px solid white;
  align-items: center;
  gap: 10px;
  padding: 5px;
`;

const ProjectsDescription = styled.div``;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  > img {
    padding: 5px;
    width: 50px;
    background-color: rgb(50, 50, 50);
  }
`;

const ProjectsCard = () => {
  return (
    <ProjectsCardStyle>
      <ImageWrapper>
        <img src={notey} />
      </ImageWrapper>
      <ProjectsDescription>
        <h1>Notey</h1>
        <p>sit amet consectetur sit amet consectetur adipisicingsit amet</p>
      </ProjectsDescription>
    </ProjectsCardStyle>
  );
};

export default ProjectsCard;

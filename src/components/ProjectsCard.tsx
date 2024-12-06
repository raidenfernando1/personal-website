import styled from "styled-components";
import notey from "../assets/ProjectsAssets/notey/image.png";

const ProjectsCardStyle = styled.div`
  display: flex;
  gap: 20px;
  border: 1px solid white;
  padding: 15px;
  height: 350px;
  width: 100%;

  > img {
    width: auto;
    height: 100%;
    min-height: 200px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 5px;
    height: 350px;
  }
`;
const ProjectsDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    height: 100%;
    overflow-y: scroll;
    font-size: 1.2rem;
  }

  @media (max-width: 1000px) {
    overflow-y: scroll;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;

  > button {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
  }

  @media (max-width: 1000px) {
    > button {
      padding: 5px;
    }
  }
`;

const ProjectsCard = () => {
  return (
    <ProjectsCardStyle>
      <img src={notey} />
      <ProjectsDescription>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptas
          voluptates quos minus, vitae eligendi perferendis. Itaque perspiciatis
          fuga enim odio fugit ea pariatur cum, iusto minus earum quos eum!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo soluta
          eveniet minus itaque dolorem accusamus voluptatibus fugit obcaecati,
          eum molestiae neque, culpa veniam blanditiis tenetur facilis, ab
          reprehenderit odit voluptate. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Vel voluptas voluptates quos minus, vitae eligendi
          perferendis. Itaque perspiciatis fuga enim odio fugit ea pariatur cum,
          iusto minus earum quos eum! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quo soluta eveniet minus itaque dolorem accusamus
          voluptatibus fugit obcaecati, eum molestiae neque, culpa veniam
          blanditiis tenetur facilis, ab reprehenderit odit voluptate.
        </p>
        <ButtonsContainer>
          <button>Github</button>
          <button>Live site</button>
        </ButtonsContainer>
      </ProjectsDescription>
    </ProjectsCardStyle>
  );
};

export default ProjectsCard;

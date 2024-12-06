import styled from "styled-components";
import notey from "../assets/ProjectsAssets/notey/image.png";

const ProjectsCardContainer = styled.div`
  display: flex;
  gap: 20px;

  > img {
    width: 500px;
    height: auto;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const Description = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;

  > button {
    padding: 10px 30px;
  }
`;

const ProjectsCard = () => {
  return (
    <>
      <p>Notey - A Note Management fullstack webapp</p>
      <ProjectsCardContainer>
        <img src={notey} />
        <ContentsContainer>
          <Description>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              exercitationem autem, dolore provident omnis vero, praesentium
              eius iure tempore ad, optio porro molestias culpa at beatae! Quas
              fugiat id impedit Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat ipsa adipisci cupiditate magni ullam
              blanditiis ipsam ipsum quam facilis excepturi hic nesciunt
              voluptatum saepe, aut amet sed. Ratione, dicta debitis. lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              nobis, eligendi quam natus tenetur quia quidem in, id eaque cum
              officiis quod eum sit! Molestiae quidem alias harum amet ex! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Sit
              exercitationem autem, dolore provident omnis vero, praesentium
              eius iure tempore ad, optio porro molestias culpa at beatae! Quas
              fugiat id impedit Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat ipsa adipisci cupiditate magni ullam
              blanditiis ipsam ipsum quam facilis excepturi hic nesciunt
              voluptatum saepe, aut amet sed. Ratione, dicta debitis. lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              nobis, eligendi quam natus tenetur quia quidem in, id eaque cum
              officiis quod eum sit! Molestiae quidem alias harum amet ex! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Sit
              exercitationem autem, dolore provident omnis vero, praesentium
              eius iure tempore ad, optio porro molestias culpa at beatae! Quas
              fugiat id impedit Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat ipsa adipisci cupiditate magni ullam
              blanditiis ipsam ipsum quam facilis excepturi hic nesciunt
              voluptatum saepe, aut amet sed. Ratione, dicta debitis. lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              nobis, eligendi quam natus tenetur quia quidem in, id eaque cum
              officiis quod eum sit! Molestiae quidem alias harum amet ex!
            </p>
          </Description>
          <ButtonContainer>
            <button>Github</button>
            <button>Live site</button>
          </ButtonContainer>
        </ContentsContainer>
      </ProjectsCardContainer>
    </>
  );
};

export default ProjectsCard;

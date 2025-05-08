import styled from "styled-components";

const Container = styled.a`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  padding: 20px;
  border: 1px dashed var(--bd-color);
  transition: 300ms;

  &:hover {
    border: 1px solid var(--bd-color);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--bd-color);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Title = styled.h1`
  margin: 0.75rem 0 0.25rem;
`;

const ProjectCard = () => {
  return (
    <Container href="#">
      <ImageWrapper>
        <img src="/your-image.jpg" alt="Project preview" />
      </ImageWrapper>
      <Title>Arachnid - AI Powered Kiosk</Title>
      <p>Easy and efficient way to gather information for end users</p>
    </Container>
  );
};

export default ProjectCard;

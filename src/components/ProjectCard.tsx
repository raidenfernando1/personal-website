import styled from "styled-components";
import PlaceholderImage from "../../public/no-image.svg?react";

const Container = styled.a`
  width: 100%;
  height: 100%;
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

type Project = {
  title: string;
  description: string;
  imagePath?: string;
  imageAlt?: string;
  link?: string;
};

const ProjectCard = ({
  title,
  description,
  imagePath,
  imageAlt,
  link,
}: Project) => {
  return (
    <Container href={link}>
      <ImageWrapper>
        {imagePath ? (
          <img
            src={imagePath}
            alt={imagePath ? imageAlt : "Placeholder Image"}
          />
        ) : (
          <PlaceholderImage />
        )}
      </ImageWrapper>
      <Title>{title}</Title>
      <p>{description}</p>
    </Container>
  );
};

export default ProjectCard;

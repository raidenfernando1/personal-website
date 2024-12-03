import React from "preact/compat";
import styled from "styled-components";

interface SkillsCardTypes {
  children: React.ReactNode;
  imagePath: string;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid white;
  padding: 15px;

  > img {
    width: 30px;
    height: auto;
  }
`;

const SkillsCard = ({ children, imagePath }: SkillsCardTypes) => {
  return (
    <CardContainer>
      <img src={imagePath} />
      <p>{children}</p>
    </CardContainer>
  );
};

export default SkillsCard;

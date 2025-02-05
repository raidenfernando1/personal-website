import React from "react";
import { FunctionComponent } from "preact";
import styled from "styled-components";

interface StandardLinkTypes {
  children: string;
  ariaLabel: string;
  navigate: string;
}

interface ImageLinkTypes {
  ariaLabel: string;
  navigate: string;
  imagePath: string;
  imageAlt?: string;
}

const ImageLinkStyle = styled.img`
  height: 30px;
  width: auto;
  transition: 300ms;

  &:hover {
    filter: opacity(60%);
  }
`;

export const StandardLink: React.FC<StandardLinkTypes> = ({
  children,
  ariaLabel,
  navigate,
}) => {
  return (
    <a aria-label={ariaLabel} href={navigate} target="_blank">
      {children}
    </a>
  );
};

export const ImageLink: FunctionComponent<ImageLinkTypes> = ({
  ariaLabel,
  navigate,
  imagePath,
  imageAlt = "",
}) => {
  return (
    <a aria-label={ariaLabel} href={navigate} target="_blank">
      <ImageLinkStyle src={imagePath} alt={imageAlt} />
    </a>
  );
};

import React from "preact/compat";

interface StyledLinkTypes {
  children: string;
  ariaLabel: string;
  navigate: string;
}

const StyledLink: React.FC<StyledLinkTypes> = ({
  children,
  ariaLabel,
  navigate,
}) => {
  return (
    <a aria-label={ariaLabel} href={navigate}>
      {children}
    </a>
  );
};

export default StyledLink;

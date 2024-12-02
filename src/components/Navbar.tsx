import { ImageLink } from "./StyledLinks";
import github from "../assets/github.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  height: auto;
`;

const NavWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavLinks = styled.li`
  list-style: none;
`;

const NameButton = styled.a`
  text-decoration: none;
  transition: 300ms;
  paddingblock: 5px;

  &:hover {
    filter: opacity(60%);
  }
`;

const Navbar = () => {
  const NavItems = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/raidenfernando9",
      imagePath: facebook,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/zillakamimicrowave/",
      imagePath: instagram,
    },
    {
      name: "Github",
      link: "https://github.com/raidenfernando1",
      imagePath: github,
    },
  ];

  return (
    <NavWrapper>
      <Nav>
        <NameButton aria-label="Refresh website" href="/">
          Raiden Fernando
        </NameButton>
        <NavList>
          {NavItems.map((nav) => (
            <NavLinks key={nav.name}>
              <ImageLink
                ariaLabel={nav.name}
                navigate={nav.link}
                imagePath={nav.imagePath}
                imageAlt={nav.name}
              />
            </NavLinks>
          ))}
        </NavList>
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;

import { StandardLink, ImageLink } from "./StyledLinks"; // Correct import
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
    { name: "Facebook", link: "/", imagePath: facebook },
    { name: "Gmail", link: "/", imagePath: instagram },
    { name: "Github", link: "/", imagePath: github },
  ];

  return (
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
  );
};

export default Navbar;

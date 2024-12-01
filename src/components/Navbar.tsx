import { ImageLink } from "./StyledLinks"; // Correct import
import github from "../assets/github.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import name from "../assets/name.svg";
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

const Navbar = () => {
  const NavItems = [
    { name: "Facebook", link: "/", imagePath: facebook },
    { name: "Gmail", link: "/", imagePath: instagram },
    { name: "Github", link: "/", imagePath: github },
  ];

  return (
    <Nav>
      <h1>Raiden Fernando</h1>
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

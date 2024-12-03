import { ImageLink } from "./StyledLinks";
import github from "../assets/github.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 30px;
  height: auto;

  > a {
    text-decoration: none;
    transition: 300ms;
    paddingblock: 5px;

    @media (max-width: 400px) {
      font-size: 2rem;
    }
    &:hover {
      filter: opacity(60%);
    }
  }
`;

const NavWrapper = styled.div`
  width: 100%;
  position: block;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;

  > li {
    list-style: none;
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
        <a aria-label="Refresh website" href="/">
          Raiden Fernando
        </a>
        <NavList>
          {NavItems.map((nav) => (
            <li key={nav.name}>
              <ImageLink
                ariaLabel={nav.name}
                navigate={nav.link}
                imagePath={nav.imagePath}
                imageAlt={nav.name}
              />
            </li>
          ))}
        </NavList>
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;

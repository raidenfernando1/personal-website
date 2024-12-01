import styled from "styled-components";
import StyledLink from "./StyledLink";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
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
    { name: "Facebook", link: "/" },
    { name: "Instagram", link: "/" },
    { name: "Github", link: "/" },
  ];

  return (
    <Nav>
      <h1 style={{ fontSize: "inherit" }}>Raiden Fernando</h1>
      <NavList>
        {NavItems.map((nav) => (
          <NavLinks key={nav.name}>
            <StyledLink
              ariaLabel={`Navigate to ${nav.link}`}
              navigate={nav.link}
            >
              {nav.name}
            </StyledLink>
          </NavLinks>
        ))}
      </NavList>
    </Nav>
  );
};

export default Navbar;

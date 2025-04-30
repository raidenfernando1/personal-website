import styled from "styled-components";
import { Link } from "wouter";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-block: 30px;
`;

const Links = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
    flex-direction: column;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Link to="/">Raiden Fernando</Link>
      <Links>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Links>
    </Container>
  );
};

export default Navbar;

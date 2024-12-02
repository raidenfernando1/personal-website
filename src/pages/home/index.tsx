import styled from "styled-components";
import { StandardLink } from "../../components/StyledLinks";
import Navbar from "../../components/Navbar";

const BasedOn = styled.p`
  letter-spacing: 0px;
  font-size: 0.8rem;
  line-height: 5;
`;

const Description = styled.h1`
  max-width: 1000px;
  font-size: 4rem;
  text-align: center;
  line-height: 1;
`;

const SubDescription = styled.h2`
  max-width: 1000px;
  font-size: 1rem;
  text-align: center;
  line-height: 2.3;
  display: flex;
  gap: 3px;

  > a {
    color: white;
    transition: 300ms;
  }

  > a:hover {
    filter: opacity(60%);
  }
`;

const HomeContents = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContents>
        <BasedOn>BASED IN RIZAL / PHILIPPINES</BasedOn>
        <Description>
          Software Engineer Specializing in Web & Mobile Applications
        </Description>
        <SubDescription>
          Hi, I'm Raiden, I make very cool websites
          <StandardLink ariaLabel="Download my CV" navigate="/">
            Download my CV
          </StandardLink>
        </SubDescription>
      </HomeContents>
    </>
  );
};

export default Home;

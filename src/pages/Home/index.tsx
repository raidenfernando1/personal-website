import styled from "styled-components";
import { StandardLink } from "../../components/StyledLinks";
import Navbar from "../../components/Navbar";

const BasedOn = styled.p`
  letter-spacing: 0px;
  font-size: 0.8rem;
  line-height: 5;
  transition 1s;  
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

  @media (max-width: 1030px) {
    font-size: 1.5rem;
  }
`;

const HomeContents = styled.header`
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > a {
    color: white;
    transition: 300ms;
  }

  > a:hover {
    filter: opacity(60%);
  }

  @media (max-width: 400px) {
    padding-inline: 0px;
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContents>
        <BasedOn>BASED IN PHILIPPINES / RIZAL</BasedOn>
        <Description>
          Software Engineer | Focused on Building Websites and Web Apps{" "}
        </Description>
        <SubDescription>
          Hi, I'm Raiden, I make websites
          <StandardLink ariaLabel="Download my CV" navigate="/">
            Download my CV
          </StandardLink>
        </SubDescription>
      </HomeContents>
    </>
  );
};

export default Home;

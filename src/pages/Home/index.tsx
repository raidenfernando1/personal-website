import styled from "styled-components";
import { StandardLink } from "../../components/StyledLinks";
import Navbar from "../../components/Navbar";

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

  > p {
    letter-spacing: 0px;
    font-size: 0.8rem;
    line-height: 5;
    cursor: default;
    transition 1s;    
  }

  > p:nth-child(2) {
    max-width: 1000px;
    font-size: 4rem;
    text-align: center;
    line-height: 1;
    cursor: default;
  }

  > p:nth-child(3) {
    max-width: 1000px;
    font-size: 1rem;
    text-align: center;
    line-height: 2.3;
    display: flex;
    cursor: default;
    gap: 3px;

    @media (max-width: 1030px) {
      font-size: 1.5rem;
    } 
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
        <p>BASED IN PHILIPPINES / RIZAL</p>
        <p>Software Engineer | Focused on Building Websites and Web Apps </p>
        <p>
          Hi, I'm Raiden, I make websites
          <StandardLink ariaLabel="Download my CV" navigate="/">
            Download my CV
          </StandardLink>
        </p>
      </HomeContents>
    </>
  );
};

export default Home;

import styled from "styled-components";

const Container = styled.main`
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Bio = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ResumeLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const Home = () => {
  return (
    <Container>
      <section>
        <h1>Raiden Fernando</h1>
        <p>Fullstack Developer | Based in Philippines ~ Rizal </p>
      </section>
      <Bio>
        <p>
          Hello im currently studying Computer Science, passionate about
          building impactful software and continuously learning new
          technologies.
        </p>
        <p>
          I like creating full-stack web applications using React, TypeScript,
          Supabase, and Vercel. My goal is to contribute to meaningful projects
          that make a difference.
        </p>
        <p>
          Take a look at my <ResumeLink>resume.</ResumeLink>
        </p>
      </Bio>
    </Container>
  );
};

export default Home;

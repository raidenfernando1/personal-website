import styled from "styled-components";

const Container = styled.main`
  height: 30%;
  display: flex;
  align-items: center;
`;

const ErrorPage = () => {
  return (
    <Container>
      <p>404 Hello, this page do not exist.</p>
    </Container>
  );
};

export default ErrorPage;

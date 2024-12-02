import "./app.css";
import Home from "./pages/home";
import styled from "styled-components";

const WebsiteLayout = styled.main`
  margin-inline: 210px;

  @media (min-width: 2000px) {
    margin-inline: 300px;
  }

  @media (max-width: 1000px) {
    margin-inline: 30px;
  }

  @media (max-width: 400px) {
    margin-inline: 0px;
  }
`;

export function App() {
  return (
    <WebsiteLayout>
      <Home />
    </WebsiteLayout>
  );
}

export default App;

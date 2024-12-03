import "./app.css";
import Home from "./pages/Home";
import GlobalButton from "./pages/GlobalButton";
import SkillsPage from "./pages/Skills";
import styled from "styled-components";

const WebsiteLayout = styled.main`
  margin-inline: 210px;

  @media (min-width: 2000px) {
    margin-inline: 300px;
  }

  @media (max-width: 1000px) {
    margin-inline: 30px;
  }
`;

export function App() {
  return (
    <WebsiteLayout>
      <Home />
      <GlobalButton />
      <SkillsPage />
    </WebsiteLayout>
  );
}

export default App;

import "./app.css";
import CustomMouse from "./components/CustomMouse";
import Home from "./pages/Home";
import GlobalButton from "./pages/GlobalButton";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import styled from "styled-components";

const WebsiteLayout = styled.main`
  margin-inline: 210px;
  animation: blur 1.2s;

  @keyframes blur {
    from {
      filter: blur(30px);
    }
    to {
      filter: blur(0px);
    }
  }

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
      <CustomMouse />
      <Home />
      <GlobalButton />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </WebsiteLayout>
  );
}

export default App;

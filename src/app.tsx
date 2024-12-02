import "./app.css";
import Home from "./pages/home";
import styled from "styled-components";

const WebsiteLayout = styled.main`
  @media (min-width: 2000px) {
    margin-inline: 300px;
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

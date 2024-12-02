import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import styled from "styled-components";

const WebsiteLayout = styled.main`
  margin-inline: 30px;
`;

export function App() {
  return (
    <>
      <Navbar />
      <WebsiteLayout>
        <Home />
      </WebsiteLayout>
    </>
  );
}

export default App;

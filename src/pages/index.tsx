import styled from "styled-components";
import Home from "./Home";
import ErrorPage from "./404";
import Projects from "./Projects";
import Navbar from "../components/Navbar";
import { Route, Switch } from "wouter";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  margin-inline: 22%;
  height: 100vh;

  @media (max-width: 768px) {
    margin-inline: 5%;
  }
`;

const Pages = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Pages>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </Pages>
    </Layout>
  );
};

export default App;

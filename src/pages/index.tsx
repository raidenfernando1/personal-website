import styled from "styled-components";
import Home from "./Home";
import Navbar from "../components/Navbar";
import { Route, Switch } from "wouter";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  margin-inline: 22%;
  height: 100vh;
`;

const Page = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Page>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/*" component={Home} />
        </Switch>
      </Page>
    </Layout>
  );
};

export default App;

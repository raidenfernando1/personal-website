import { render } from "preact";
import "./index.css";

import { Route } from "wouter";

import Website from "./page/Website";

const App = () => {
  const routes = [
    {
      path: "/",
      component: Website,
    },
  ];

  return (
    <main class="route-main-container">
      {routes.map((route) => {
        return <Route path={route.path} component={route.component} />;
      })}
    </main>
  );
};

render(<App />, document.getElementById("app")!);

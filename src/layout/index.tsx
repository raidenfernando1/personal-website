import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import style from "./layout.module.css";
import NoiseStyle from "./noise.module.css";
import { misc } from "../assets/assets";

import NavigationBar from "../components/navBar/navBar";

import HomePage from "../pages/home";
import SkillPage from "../pages/skills";
import ContactPage from "../pages/contact";

function App() {
  useEffect(() => {
    console.log("Hello thanks for visiting my website!");
    console.log("Please dont look at my CSS its bad im aware. 😀");
  }, []);

  return (
    <>
      <div
        className={NoiseStyle.noise}
        style={{
          background: `transparent url(${misc.Grain}) repeat 0 0 `,
        }}
      ></div>
      <div className={style.pageLayout}>
        <Router>
          <NavigationBar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>} />
              <Route path="/skills" element={<SkillPage></SkillPage>} />{" "}
              <Route path="/contact" element={<ContactPage></ContactPage>} />
            </Routes>
          </main>
        </Router>
      </div>
      <Analytics></Analytics>
    </>
  );
}

export default App;

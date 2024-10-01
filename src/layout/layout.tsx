import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from "./layout.module.css";
import NoiseStyle from "./noise.module.css";
import NavigationBar from "../components/navBar/navBar";
import HomePage from "../pages/home";
import SkillPage from "../pages/skills";
import { misc } from "../assets/assets";
function App() {
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
              <Route path="/skills" element={<SkillPage></SkillPage>} />
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;

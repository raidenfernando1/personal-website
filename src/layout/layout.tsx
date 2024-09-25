import style from "./layout.module.css";
import NoiseStyle from "./noise.module.css";
import NavigationBar from "../components/navBar/navBar";
import HomePage from "../pages/home";

function App() {
  return (
    <>
      <div className={NoiseStyle.noise}></div>
      <div className={style.pageLayout}>
        <NavigationBar />
        <main>
          <HomePage></HomePage>
        </main>
      </div>
    </>
  );
}

export default App;

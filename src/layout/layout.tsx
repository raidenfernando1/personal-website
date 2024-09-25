import style from "./layout.module.css";
import NoiseStyle from "./noise.module.css";

function App() {
  return (
    <>
      <div className={NoiseStyle.noise}></div>
      <div className={style.layout}>
        <main></main>
      </div>
    </>
  );
}

export default App;

import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import CheckBoxes from "./CheckBoxes";

const App = () => {
  return (
    <main className="flex flex-col px-10 md:px-54 pb-24 h-screen">
      <div className="h-full">
        <Home />
        <Projects />
        <CheckBoxes />
        <Contact />
      </div>
    </main>
  );
};

export default App;

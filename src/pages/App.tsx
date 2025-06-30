import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  return (
    <main className="flex flex-col px-10 md:px-54 pb-24 h-screen">
      <div className="h-full">
        <Home />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default App;

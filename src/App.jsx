import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import night from "./assets/night.jpg";
import Vaporwave from "./assets/Vaporwave.jpg";
import { ProjectCard } from "./Components/ProjectCard";

function App() {
  return (
    <>
      <div className=" min-h-screen">
        {/* Navbar */}
        <Navbar />

        <div className="container mx-auto p-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold">Thanks for stopping by </h1>
            <p className="text-gray-500">
              My name is Brandon and I&apos;m a recent computer science graduate
            </p>
          </header>
        </div>

        <div>
          <section>
            <header>
              <h1 className="text-center text-4xl font-bold font-mono">
                Projects
              </h1>
            </header>

            <ProjectCard />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;

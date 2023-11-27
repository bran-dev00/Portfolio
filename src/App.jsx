import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import night from "./assets/night.jpg";
import Vaporwave from "./assets/Vaporwave.jpg";
import { ProjectCard } from "./Components/ProjectCard";
import Footer from "./Components/Footer/Footer";

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
          <section className="py-5">
            <header>
              <h1 className="text-center text-xl font-bold">Projects</h1>
            </header>

            {/* Grid */}
            <div className="grid grid-cols-3 place-items-center py-3 gap-7">
              <ProjectCard img={night} description={" Project"} />
              <ProjectCard img={night} description={" Project"} />
              <ProjectCard img={night} description={" Project"} />
              <ProjectCard img={night} description={" Project"} />
              <ProjectCard img={night} description={" Project"} />
              <ProjectCard img={night} description={" Project"} />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

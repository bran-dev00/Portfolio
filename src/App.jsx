import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import night from "./assets/night.jpg";

import playBtn from "./assets/playBtn.svg";
import pauseBtn from "./assets/pauseBtn.svg";
import resetBtn from "./assets/resetBtn.svg";
import stopBtn from "./assets/stopBtn.svg";

import { ProjectCard } from "./Components/ProjectCard";
import Footer from "./Components/Footer/Footer";
import { CassetteTape } from "./Components/CassetteTape";

function App() {
  return (
    <>
      <div className=" font-mono min-h-screen bg-gradient-to-t from-[#2d1e44] to-blue-950">
        <Navbar />

        <div className="container mx-auto p-8">
          <header className="text-center py-5 mb-8 border-2 border-white rounded-lg h-[500px] flex flex-col items-center ">
            <h1 className="text-4xl font-bold text-white">
              Hi There, Thanks for stopping by!
            </h1>
            <p className="text-white text-lg">
              My name is Brandon, I&apos;m a recent computer science graduate
              from{" "}
              <span className="text-yellow-400 italic font-bold backdrop-blur-sm">
                Iowa State University
              </span>
              .
            </p>

            <p className="text-white text-lg">
              I enjoy exploring and learning new things.
              <br />
              {/* <span>Some of my hobbies include but are not limited to: </span>
              <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Art</li>
                <li>Coding</li>
              </ul> */}
            </p>

            <a href="#" className="my-4 ">
              <CassetteTape />
              <a href="#" className="text-white underline">
                View Transcript
              </a>
            </a>

            <div>
              <button>
                <img src={playBtn} alt="" />
              </button>
              <button>
                <img src={pauseBtn} alt="" />
              </button>
              <button>
                <img src={resetBtn} alt="" />
              </button>
              <button>
                <img src={stopBtn} alt="" />
              </button>
            </div>
          </header>
        </div>

        <div>
          <section className="py-5">
            <header>
              <h1 className="text-center text-3xl font-bold text-white">
                Projects
              </h1>
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

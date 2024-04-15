import { Navbar } from "./Components/Navbar/Navbar";
import { useState } from "react";
import HeroPicture from "./assets/SkillsHoneyComb.png";
import Vaporwave from "./assets/Vaporwave.jpg";
import Footer from "./Components/Footer/Footer";
import { Socials } from "./Components/socials";
import ProjectCard from "./Components/Projects/ProjectCard";

function App() {
  const [interestText, setInterestText] = useState("Audio Programming");

  // Test:
  const project = {
    title: "Project #1",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    screenshot: Vaporwave,
    sourceLink: "https://github.com/m00se01/Portfolio",
  };

  return (
    <>
      <div className="bg-background text-text relative">
        <Navbar />
        <Socials />

        <header className="relative">
          <div className="container flex mx-auto items-center mt-16 mb-12 gap-x-96 font-inria">
            {/* Left Text */}
            <div className="flex flex-col max-w-[800px] mx-auto p-8 ">
              <h1 className="text-8xl w-[600px] font-[inria] mb-8 ">
                Hi there, my name is Brandon
              </h1>

              <h2 className="text-4xl">
                I’m a Computer Science graduate from Iowa State University
              </h2>

              <h3 className="text-4xl mt-4">
                I have an interest in <br />
                Full-Stack Development and{" "}
                <span className=" font-bold block mt-5 text-center rounded-md p-4 bg-accent text-black">
                  {interestText}
                </span>
              </h3>
            </div>

            {/* Right Image */}
            <img
              src={HeroPicture}
              alt="graduation picture"
              className="h-auto max-h-96 md:max-h-full mx-auto pt-10  "
            />
          </div>
          {/* Scroll Down */}
          <div className="bg-accent rounded-sm animate-bounce ease-in-out bg-center absolute bottom-[-50px] left-[45%] w-60 h-4 mb-5"></div>
        </header>

        <section className="container flex flex-col justify-center items-center mx-auto text-white text-lg font-inria">
          <h1 className="text-center text-6xl p-10">Projects</h1>

          {/* Project Grid */}

          <div>
            <ProjectCard
              title={project.title}
              skills={project.skills}
              description={project.description}
              screenshot={project.screenshot}
              linkToProject={project.sourceLink}
            />
            <ProjectCard
              title={project.title}
              skills={project.skills}
              description={project.description}
              screenshot={project.screenshot}
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;

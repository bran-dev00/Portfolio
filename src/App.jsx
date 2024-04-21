import { Navbar } from "./Components/Navbar/Navbar";
import { useState } from "react";
import HeroPicture from "./assets/SkillsHoneyComb.png";
import Vaporwave from "./assets/Vaporwave.jpg";
import Footer from "./Components/Footer/Footer";
import { Socials } from "./Components/socials";
import ProjectCard from "./Components/Projects/ProjectCard";
import { SmallProjectCard } from "./Components/Projects/SmallProjectCard";
import { CassetteTape } from "./Components/CassetteTape";

function App() {
  const [interestText, setInterestText] = useState("Audio Programming");

  // Test:
  const project = {
    cardImage:
      "https://img.freepik.com/free-photo/portrait-adorable-cavapoo-dog-holding-tennis-ball-park-sunny-day_181624-59516.jpg?t=st=1713199924~exp=1713203524~hmac=0c3853ead18e9ca1a3940aefb912055fbaf70a500f6976c79b18588d4e3d7801&w=1380",
    altDescription: "placeholder",
    cardDescription: "Title of project",
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
          <div className="bg-accent rounded-sm motion-reduce:hidden animate-bounce ease-in-out bg-center absolute bottom-[-50px] left-[45%] w-60 h-4 mb-5"></div>
        </header>

        <section className="container mx-auto text-white text-lg font-inria">
          <h1 className="text-left text-6xl p-10">Projects</h1>

          {/* Project Grid */}

          <div className="grid grid-cols-3 gap-4 my-5">
            <SmallProjectCard
              cardImage={project.cardImage}
              cardDescription={project.cardDescription}
            />
            <SmallProjectCard
              cardImage={project.cardImage}
              cardDescription={project.cardDescription}
            />
            <SmallProjectCard
              cardImage={project.cardImage}
              cardDescription={project.cardDescription}
            />
            <SmallProjectCard
              cardImage={project.cardImage}
              cardDescription={project.cardDescription}
            />
            <SmallProjectCard
              cardImage={project.cardImage}
              cardDescription={project.cardDescription}
            />
            <SmallProjectCard
              cardImage={project.cardImage}
              cardDescription={project.cardDescription}
            />
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto text-white text-lg font-inria flex flex-col justify-center items-center">
          <h1 className="text-left text-6xl p-10">About Me</h1>

          {/* Image */}

          <CassetteTape />

          <img
            className={"aspect-square w-[400px] "}
            src={project.cardImage}
            alt=""
          />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;

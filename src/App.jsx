import { Navbar } from "./Components/Navbar/Navbar";
import { useState } from "react";
import HeroPicture from "./assets/SkillsHoneyComb.png";
import GradPicture from "./assets/GraduationPicture.png";
import Footer from "./Components/Footer/Footer";
import { Socials } from "./Components/socials";
import { SmallProjectCard } from "./Components/Projects/SmallProjectCard";
import { CassetteTape } from "./Components/CassetteTape/CassetteTape";
import { ContactMe } from "./Components/ContactMe/ContactMe";
import Disassembler from "./assets/disassembler.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKeyboard,
  faPlantWilt,
  faSoap,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  const [interestText, setInterestText] = useState("Audio Programming");

  // Test:
  const javaProject = {
    image: Disassembler,
    imgAltDescription: "placeholder",
    title: "Assembly Dissasembler",
    finished: true,
    stack: ["java"],
    description:
      "For my computer architecture class we were tasked to write a dissasembler in java that takes some machine code and converts it to assembly instructions.",
  };

  const reactProject = {
    image:
      "https://img.freepik.com/free-photo/portrait-adorable-cavapoo-dog-holding-tennis-ball-park-sunny-day_181624-59516.jpg?t=st=1713199924~exp=1713203524~hmac=0c3853ead18e9ca1a3940aefb912055fbaf70a500f6976c79b18588d4e3d7801&w=1380",
    imgAltDescription: "placeholder",
    title: "Steam Roll",
    finished: false,
    stack: ["javascript", "react", "node"],
    description:
      "This project is currently still in development, but I am building a web app that chooses a random game from your steam library. Why? Well over the years many people probably have ammased a large collection of games in their steam library's from the mutliple steam sales in the year, so people can get analysis paralysis or too overwhelmed on what game to play that they don't play anthing.This project is currently still in development, but I am building a web app that chooses a random game from your steam library. Why? Well over the years many people probably have ammased a large collection of games in their steam library's from the mutliple steam sales in the year, so people can get analysis paralysis or too overwhelmed on what game to play that they don't play anthing.This project is currently still in development, but I am building a web app that chooses a random game from your steam library. Why? Well over the years many people probably have ammased a large collection of games in their steam library's from the mutliple steam sales in the year, so people can get analysis paralysis or too overwhelmed on what game to play that they don't play anthing. This project is currently still in development, but I am building a web app that chooses a random game from your steam library. Why? Well over the years many people probably have ammased a large collection of games in their steam library's from the mutliple steam sales in the year, so people can get analysis paralysis or too overwhelmed on what game to play that they don't play anthing This project is currently still in development, but I am building a web app This project is currently still in development, but I am building a web app.",
  };

  const pokemonProject = {
    title: "ASCII Pokemon Console Game",
    image: Disassembler,
    finished: false,
    stack: ["cpp", "c"],
  };

  return (
    <>
      <div className="relative bg-background text-text">
        <Navbar />
        <Socials />

        <div className="container p-4 mx-auto border sm:border-red-500 md:border-green-500 lg:border-blue-500 xl:border-purple-500 sm:px-6 lg:px-16">
          <header className="flex items-center p-4 my-16 border font-inria sm:gap-x-5">
            {/* Left Text */}

            <div className="flex flex-col p-8 mx-auto ">
              <h1 className="mb-8 text-5xl font-bold sm:text-4xl md:text-5xl lg:text-8xl text-text ">
                Hi there, my name is Brandon
              </h1>

              <h2 className="text-3xl lg:text-4xl sm:text-2xl">
                I’m a Computer Science graduate from{" "}
                <span className="font-bold text-secondaryAccent">
                  Iowa State University
                </span>
              </h2>

              <h3 className="mt-4 text-3xl lg:text-4xl">
                I have an interest in <br />
                Full-Stack Development and{" "}
                <span className="block p-4 mt-5 font-bold text-center text-black rounded-md bg-accent xl:text-3xl lg:text-xl md:text-lg sm:text-md">
                  {interestText}
                </span>
              </h3>
            </div>

            {/* Right Image */}
            <img
              src={HeroPicture}
              alt="graduation picture"
              className="p-4  hidden sm:block 2xl:max-w-fit lg:min-w-[300px] xl:min-w-[400px] md:max-w-[200px] sm:w-52 w-40 "
            />
          </header>
          {/* Scroll Down */}
          {/* <div className="container mx-auto bg-accent rounded-sm motion-reduce:hidden animate-bounce ease-in-out  absolute bottom-[-50px] left-[45%] w-60 h-4 mb-5"></div> */}

          <section className="my-16 text-lg text-text font-inria ">
            <h1 className="text-center 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl">
              Projects
            </h1>

            {/* Project Grid */}

            <div className=" min-h-[650px] relative grid xl:grid-cols-3 xl:gap-14 lg:grid-cols-2 md:grid-cols-1 md:place-items-center  my-8 p-16 rounded-md place-items-start bg-primary">
              <SmallProjectCard
                image={javaProject.image}
                title={javaProject.title}
                finished={javaProject.finished}
                stack={javaProject.stack}
                description={javaProject.description}
              />
              <SmallProjectCard
                finished={pokemonProject.finished}
                title={pokemonProject.title}
                image={pokemonProject.image}
                stack={pokemonProject.stack}
              />
              <SmallProjectCard
                image={reactProject.image}
                title={reactProject.title}
                finished={reactProject.finished}
                stack={reactProject.stack}
                description={reactProject.description}
              />
              {/* <SmallProjectCard
                image={reactProject.image}
                title={reactProject.title}
                finished={reactProject.finished}
                stack={reactProject.stack}
                description={reactProject.description}
              /> */}
              <p className="absolute bottom-0 p-4 text-xl font-bold text-secondaryAccent right-10 ">
                Projects marked with:
                <span className="text-lg text-white">
                  {" "}
                  <FontAwesomeIcon icon={faKeyboard} />{" "}
                </span>
                are still in development{" "}
              </p>
            </div>
          </section>

          {/* About Section */}
          <section className="items-center my-16 text-lg justify-centertext-white font-inria ">
            <h1 className="p-8 text-center 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl">
              About Me
            </h1>

            <div className="relative p-4 mx-auto rounded-lg bg-primary">
              <div className="flex items-center justify-center ">
                <div className="">
                  {/* Fix Dimensions */}
                  <CassetteTape />
                </div>

                <div className="flex flex-col max-w-[800px] min-h-[650px]  bg-[#9E1829] p-8 items-center ">
                  <img
                    className="object-contain max-w-[300px] max-h-[250px] mb-8 rounded-lg "
                    src={GradPicture}
                    alt="My Graduation Picture"
                  />
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eum exercitationem doloribus sunt aperiam accusamus, numquam
                    animi, odio ipsam nesciunt amet, eaque rerum facilis
                    praesentium voluptatem nemo vero obcaecati consequuntur
                    minus!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="my-16 ">
            <ContactMe />
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

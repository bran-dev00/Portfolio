import { Navbar } from "./Components/Navbar/Navbar";
import { useState } from "react";
import HeroPicture from "./assets/SkillsHoneyComb.png";
import GradPicture from "./assets/GraduationPicture.png";
import Footer from "./Components/Footer/Footer";
import { Socials } from "./Components/socials";
import ProjectCard from "./Components/Projects/ProjectCard";
import { SmallProjectCard } from "./Components/Projects/SmallProjectCard";
import { CassetteTape } from "./Components/CassetteTape";
import { ContactMe } from "./Components/ContactMe/ContactMe";

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
          <div className="container border flex mx-auto p-8 items-center mt-8 mb-16 gap-x-96 font-inria">
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
          {/* <div className="container mx-auto bg-accent rounded-sm motion-reduce:hidden animate-bounce ease-in-out  absolute bottom-[-50px] left-[45%] w-60 h-4 mb-5"></div> */}
        </header>

        <section className="container mx-auto border text-white text-lg p-16 my-16 font-inria">
          <h1 className="text-center text-8xl">Projects</h1>

          {/* Project Grid */}

          <div className="grid grid-cols-3 gap-2 my-8 border p-16 place-items-center bg-emerald-900">
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
        <section className="container flex flex-col items-center mx-auto text-white text-lg font-inria my-8 border ">
          <h1 className="text-center text-8xl p-10">About Me</h1>

          <div className="relative border rounded-lg p-16 m-8 bg-emerald-700">
            <div className="flex justify-center items-center">
              <div className="">
                <CassetteTape />
              </div>

              <div className="flex flex-col w-[800px] h-[628px] bg-emerald-800   my-8 p-8 items-center ">
                <img
                  className="object-contain w-[300px] h-[300px] mb-8"
                  src={GradPicture}
                  alt="My Graduation Picture"
                />
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  exercitationem doloribus sunt aperiam accusamus, numquam
                  animi, odio ipsam nesciunt amet, eaque rerum facilis
                  praesentium voluptatem nemo vero obcaecati consequuntur minus!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto p-16 border flex justify-center items-center h-[800px]">
          <ContactMe />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;

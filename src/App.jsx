import { Navbar } from "./Components/Navbar/Navbar";
import { useState } from "react";
import HeroPicture from "./assets/HoneyComb.png";
import Footer from "./Components/Footer/Footer";
import { Socials } from "./Components/socials";

function App() {
  const [interestText, setInterestText] = useState("Audio Programming");

  return (
    <>
      <div className="min-h-screen bg-background text-text relative">
        <Navbar />
        <Socials />
        <header>
          <div className="container flex mx-auto items-center mt-18 gap-x-96">
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
                <span className=" font-bold block mt-5 text-center rounded-md p-4 bg-red-600">
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
          <div className="bg-accent animate-bounce ease-in-out bg-center absolute bottom-8 left-1/2 w-48 h-4"></div>
        </header>
      </div>
    </>
  );
}

export default App;

import { Navbar } from "./Components/Navbar/Navbar";
import { useState } from "react";
import HeroPicture from "./assets/HeroPicture.svg";
import Footer from "./Components/Footer/Footer";

function App() {
  const [interestText, setInterestText] = useState("Audio Programming");

  return (
    <>
      <div className="min-h-screen bg-background text-text">
        <Navbar />

        <header className="flex justify-between items-center">
          {/* Left Text */}
          <div className="flex flex-col max-w-lg mx-auto p-8">
            <p className="text-8xl font-[inria] mb-8 ">
              Hi, there my name is Brandon
            </p>
            <p className="text-3xl">
              I’m a Computer Science graduate from Iowa State University
            </p>

            <p className="text-3xl mt-4">
              I have an interest in <br />
              Full-Stack Development and{" "}
              <span className=" bg-red-600">{interestText}</span>
            </p>
          </div>

          {/* Right Image */}
          <img
            src={HeroPicture}
            alt="graduation picture"
            className="h-auto max-h-96 md:max-h-full mx-auto pt-10 "
          />
        </header>
      </div>
    </>
  );
}

export default App;

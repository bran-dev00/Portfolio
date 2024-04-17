import "./CassetteTape.css";
import cassetteTape from "../assets/CassetteBase.png";
import spoolLeft from "../assets/spoolLeft.svg";
import playBtn from "../assets/playBtn.svg";
import stopBtn from "../assets/stopBtn.svg";
import pauseBtn from "../assets/pauseBtn.svg";
import resetBtn from "../assets/resetBtn.svg";
import testSong from "../assets/testSong.wav";
import { useState, useRef } from "react";

export const CassetteTape = () => {
  const [isActive, setIsActive] = useState(false);
  const audioElem = useRef();

  const handlePlay = () => {
    console.log("play button clicked");
    setIsActive(true);
    audioElem.current.play();
  };
  const handlePause = () => {
    console.log("pause button clicked");
    setIsActive(false);
    audioElem.current.pause();
  };
  const handleStop = () => {
    console.log("stop button clicked");
    setIsActive(false);
    audioElem.current.pause();
  };

  const handleReset = () => {
    console.log("reset button clicked");
    setIsActive(false);
    audioElem.current.pause();
  };

  return (
    <div className="flex flex-col">
      <div className="position relative">
        <img src={cassetteTape} alt="cassette tape" />

        <div>
          <img
            className={
              isActive
                ? "absolute top-[58px] left-16 animate-spin"
                : "absolute top-[58px] left-16"
            }
            src={spoolLeft}
            alt="cassette spool"
          />
          <img
            className={
              isActive
                ? "absolute top-[58px] right-16 animate-spin"
                : "absolute top-[58px] right-16"
            }
            src={spoolLeft}
            alt="cassette spool"
          />
        </div>

        <a href="#">View Transcript</a>
        <audio controls ref={audioElem} src={testSong}></audio>

        <div className="flex gap-4 my-3">
          <button onClick={handlePlay}>
            <img src={playBtn} alt="play button" />
          </button>

          <button onClick={handlePause}>
            <img src={pauseBtn} alt="pause button" />
          </button>
          <button onClick={handleStop}>
            <img src={stopBtn} alt="stop button" />
          </button>
          <button onClick={handleReset}>
            <img src={resetBtn} alt="reset button" />
          </button>
        </div>
      </div>
    </div>
  );
};

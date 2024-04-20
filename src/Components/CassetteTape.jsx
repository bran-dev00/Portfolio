import "./CassetteTape.css";
import cassetteTape from "../assets/CassetteBase.png";
import spoolLeft from "../assets/spoolLeft.svg";
import playBtn from "../assets/playBtn.svg";
import stopBtn from "../assets/stopBtn.svg";
import pauseBtn from "../assets/pauseBtn.svg";
import resetBtn from "../assets/resetBtn.svg";
import testSong from "../assets/testSong.wav";
import { useState, useRef, useEffect } from "react";

export const CassetteTape = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRewinding, setIsRewinding] = useState(false);
  const [isFastForwarding, setIsFastForwarding] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioElem = useRef();
  const progressBar = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioElem.current.duration);
    setDuration(seconds);
    setCurrentTime(audioElem.current.currentTime);
    progressBar.current.max = seconds;
  }, [audioElem?.current?.loadedmetadata, audioElem?.current?.readyState]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changeProgressWidth = () => {
    audioElem.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty();
    setCurrentTime(progressBar.current.value);
  };

  const handlePlay = () => {
    console.log("play button clicked");
    setIsPlaying(true);
    audioElem.current.play();
  };

  const handlePause = () => {
    console.log("pause button clicked");
    setIsPlaying(false);
    audioElem.current.pause();
  };
  const handleStop = () => {
    console.log("stop button clicked");
    setIsPlaying(false);
    audioElem.current.pause();
    audioElem.current.currentTime = 0;
  };

  const handleReset = () => {
    console.log("reset button clicked");
    setIsPlaying(false);
    audioElem.current.currentTime = 0;
  };

  return (
    <div className="flex flex-col">
      <div className="position relative">
        <img src={cassetteTape} alt="cassette tape" />

        <div>
          <img
            className={
              isPlaying
                ? "absolute top-[58px] left-16 animate-spin"
                : "absolute top-[58px] left-16"
            }
            src={spoolLeft}
            alt="cassette spool"
          />
          <img
            className={
              isPlaying
                ? "absolute top-[58px] right-16 animate-spin"
                : "absolute top-[58px] right-16"
            }
            src={spoolLeft}
            alt="cassette spool"
          />
        </div>

        <a href="#">View Transcript</a>
        <audio controls ref={audioElem} src={testSong}></audio>

        {/*  seek bar */}
        <div className="w-[300px] border my-5 p-2 rounded-md">
          <div className={`w-[10px] bg-accent h-2`}></div>

          <div>
            <input
              type="range"
              className={`w-[${(currentTime / duration) * 100}px]`}
              defaultValue={"0"}
              ref={progressBar}
              onChange={changeProgressWidth}
            />
          </div>

          <div className="text-center">
            {formatTime(currentTime)} /{" "}
            {duration ? formatTime(duration) : `00:00`}
          </div>
        </div>

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

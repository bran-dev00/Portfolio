import cassetteTape from "../../assets/CassetteBase.png";
import spoolLeft from "../../assets/spoolLeft.svg";
import playBtn from "../../assets/playBtn.svg";
import stopBtn from "../../assets/stopBtn.svg";
import pauseBtn from "../../assets/pauseBtn.svg";
import minusBtn from "../../assets/minusBtn.png";
import plusBtn from "../../assets/plusBtn.png";
import testSong from "../../assets/testSong.wav";
import { useState, useRef, useEffect } from "react";

export const CassetteTape = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioElem = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  // Load Timestamps
  useEffect(() => {
    const seconds = Math.floor(audioElem.current.duration);
    setDuration(seconds);
    setCurrentTime(audioElem.current.currentTime);
    progressBar.current.max = seconds;
  }, [audioElem?.current?.loadedmetadata, audioElem?.current?.readyState]);

  // 00:00 time format
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  // Progress bar seeking -> changes audio to match progress bar
  const changeProgressWidth = () => {
    audioElem.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  };

  // Animation for progressbar -> changes progressbar to match the audio's current time
  const whilePlaying = () => {
    progressBar.current.value = audioElem.current.currentTime;
    setCurrentTime(progressBar.current.value);
    requestAnimationFrame(whilePlaying);
  };

  const handleVolumeUp = () => {
    if (audioElem.current.volume >= 1) {
      audioElem.current.volume = 1;
    } else {
      audioElem.current.volume += 0.1;
    }
    console.log("up");
  };
  const handleVolumeDown = () => {
    if (audioElem.current.volume <= 0) {
      audioElem.current.volume = 0;
    } else {
      audioElem.current.volume -= 0.1;
    }
    console.log("down");
  };

  const handlePlay = () => {
    console.log("play button clicked");
    setIsPlaying(true);
    audioElem.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const handlePause = () => {
    console.log("pause button clicked");
    setIsPlaying(false);
    audioElem.current.pause();
    cancelAnimationFrame(animationRef.current);
  };
  const handleStop = () => {
    console.log("stop button clicked");
    setIsPlaying(false);
    audioElem.current.pause();
    audioElem.current.currentTime = 0;
    setCurrentTime(0);
    progressBar.current.value = 0;
    cancelAnimationFrame(animationRef.current);
  };

  return (
    <div className="p-4 font-bold text-text bg-secondary h-[100%] sm:rounded-b-md md:rounded-r-md">
      <div className="flex flex-col items-center justify-center">
        {/* CasseteTape and Spools */}
        <div className="relative">
          <img src={cassetteTape} alt="cassette tape" />
          <div>
            <img
              className={
                isPlaying
                  ? "absolute top-[58px] left-[60px] animate-spin"
                  : "absolute top-[58px] left-[60px]"
              }
              src={spoolLeft}
              alt="cassette spool"
            />
            <img
              className={
                isPlaying
                  ? "absolute top-[58px] right-[60px] animate-spin"
                  : "absolute top-[58px] right-[60px]"
              }
              src={spoolLeft}
              alt="cassette spool"
            />
          </div>
        </div>

        {/*Audio Element*/}
        <audio ref={audioElem} src={testSong}></audio>

        {/* Control Buttons Container */}
        <div className="relative flex flex-col items-center justify-center p-5 my-3 border-2 rounded-lg bg-background/40">
          <a className="text-center" href="#">
            View Transcript
          </a>
          <div className="flex flex-col items-center justify-center p-2 my-4 rounded-md">
            {/* Progress Bar */}
            <div>
              {/* <label htmlFor="progressBar">Seek:</label> */}
              <input
                type="range"
                name="progressBar"
                className={`w-[250px]`}
                defaultValue={"0"}
                ref={progressBar}
                onChange={changeProgressWidth}
              />
            </div>

            {/* Volume Slider? */}
            {/* <div>
            <label htmlFor="volume">Volume </label>
            <input
              name="volume"
              type="range"
              onChange={handleChangeVolume}
              ref={volumeBarRef}
            />
          </div> */}

            {/* Current Time  */}
            <div className="text-center">
              {formatTime(currentTime)}/{" "}
              {duration ? formatTime(duration) : `00:00`}
            </div>
          </div>

          <div>
            <button onClick={handlePlay}>
              <img src={playBtn} alt="play button" />
            </button>

            <button onClick={handlePause}>
              <img src={pauseBtn} alt="pause button" />
            </button>
            <button onClick={handleStop}>
              <img src={stopBtn} alt="stop button" />
            </button>
          </div>

          <div className="">
            <button onClick={handleVolumeDown}>
              <img src={minusBtn} alt="" />
            </button>

            <button onClick={handleVolumeUp}>
              <img src={plusBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

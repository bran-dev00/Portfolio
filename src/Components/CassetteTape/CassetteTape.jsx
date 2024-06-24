import cassetteTape from "../../assets/CassetteBase.png";
import spoolLeft from "../../assets/spoolLeft.svg";
import playBtn from "../../assets/playBtn.svg";
import stopBtn from "../../assets/stopBtn.svg";
import pauseBtn from "../../assets/pauseBtn.svg";
import minusBtn from "../../assets/minusBtn.png";
import plusBtn from "../../assets/plusBtn.png";
import introductionAudio from "../../assets/Introduction.wav";
import { useState, useRef, useEffect } from "react";
import { TranscriptModal } from "./TranscriptModal";

export const CassetteTape = () => {
  const script = `Hi there, my name is Brandon and I'm a computer science graduate from Iowa State University. Thanks again for stopping by and I hope by listening to this you can get to know me a bit better.
			 I have many interests in both computer science and outside of computer science. But for the time being I'm focusing more on improving my full stack development skills, I feel pretty comfortable working with, HTML, CSS, and Javascript as well as React and Node.
       I have worked with a few backend technologies before as well, working with the Springboot framework in Java ,MySQL for relational databases and node to build REST API's. I 've also dabbled with C# and the .NET ecosystem, GraphQL, and MongoDB. But I feel like my frontend skills are a little bit better than my backend skills at the moment.
			 My time in university exposed me to many technologies and gave me a solid foundation of computer science principles such as Object Oriented Programming, Data Structures and Algorithms, Lower level processes like operating system schedulers and caches as well as just general problem solving practice.
			 
			 Apart from software engineering, I have a big interest in music, I've been playing guitar for about 5 years now, and I've also been teaching myself digital music production. So I have been dabbling and researching more about audio programming and how to create my own VST's and digital instruments. 
			 
			 I've been playing computer games since I was in grade school and so naturally I was curious about making games. In fact Computer Games was definitely one of the biggest contributing factors when I chose to study computer science.
			
			 I still have so much to learn and so many things I want to build. But at the end of the day I just want to contribute and make cool things both for myself and for others.
			 Anyways I just wanted to say thanks one more time for taking the time to listen to me and hope you have a great rest of your day. `;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const audioElem = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Load Timestamps
  useEffect(() => {
    const seconds = Math.floor(audioElem.current.duration);
    setDuration(seconds);
    setCurrentTime(audioElem.current.currentTime);
    progressBar.current.max = seconds;
  }, [audioElem?.current?.loadedmetadata, audioElem?.current?.readyState]);

  useEffect(() => {
    if (currentTime >= duration) {
      handleStop();
    }
  }, [
    currentTime,
    audioElem?.current?.loadedmetadata,
    audioElem?.current?.readyState,
  ]);

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
    <div className="p-4 font-bold text-text bg-secondary h-[100%] sm:rounded-b-md md:rounded-b-none md:rounded-tr-md md:rounded-br-md">
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
        <audio ref={audioElem} src={introductionAudio}></audio>

        {/* Control Buttons Container */}
        <div className="relative flex flex-col items-center justify-center p-5 my-3 border-2 rounded-lg bg-background/40">
          <button
            onClick={toggleModal}
            className="text-center underline underline-offset-2"
          >
            View Transcript
          </button>
          <TranscriptModal
            isOpen={isModalOpen}
            onClose={toggleModal}
            script={script}
          />
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
              {duration ? formatTime(duration) : `02:05`}
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

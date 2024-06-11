import { useEffect, useState } from "react";

export const ChangingSign = () => {
  const [interestText, setInterestText] = useState("Audio Programming");
  const [index, setIndex] = useState(0);

  const interests = [
    "Audio Programming",
    "Music",
    "Game Development",
    "Art",
    "Much Much More!",
  ];

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let changeText = () => {
    scramble();
    index + 1 >= interests.length ? setIndex(0) : setIndex(index + 1);
    setInterestText(interests[index]);
  };

  let scramble = () => {
    let tempWord = interestText;
    let iterations = 0;

    const interval = setInterval(() => {
      setInterestText(
        tempWord
          .split("")
          .map((letter, index) => {
            // map a random letter to the tempword, and we reveal each actual letter every interval
            if (index < iterations + 1) {
              return tempWord[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations > tempWord.length) {
        clearInterval(interval);
      }

      iterations += 1;
    }, 35);
  };

  useEffect(() => {
    const interval = setInterval(changeText, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <span className="block p-4 my-5 text-sm font-bold text-center text-black rounded-md bg-accent xl:text-3xl lg:text-xl md:text-lg sm:text-md">
      {interestText}
    </span>
  );
};

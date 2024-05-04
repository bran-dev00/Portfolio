import { useState } from "react";

export const ContactMe = () => {
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      <div className=" text-black bg-secondary/30 p-8 my-8 h-[700px] rounded-lg ">
        <h1 className="text-4xl text-white font-bold text-center">
          Get in touch with me
        </h1>

        <h2 className="text-accent text-center text-3xl my-8 font-bold">
          Thanks for taking the time to reach out!
        </h2>

        <form
          action="submit"
          onSubmit={handleSubmit}
          className=" max-h-[500px] min-w-[800px] text-black flex flex-col justify-center gap-4 p-8 my-4"
        >
          <input type="checkbox" name="botcheck" className="hidden"></input>
          <input type="hidden" name="access_key"></input>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-4 rounded-md focus:outline-none border border-transparent focus:ring-2 focus:ring-accent"
            required={true}
          />
          <input
            className="p-4 rounded-md focus:outline-none border border-transparent focus:ring-2 focus:ring-accent"
            type="email"
            name="email"
            placeholder="Enter your email"
            required={true}
          />

          <textarea
            name="message"
            className="h-40 rounded-md p-4 focus:outline-none border border-transparent focus:ring-2 focus:ring-accent"
            placeholder="Write your message here..."
            required={true}
          ></textarea>
          <button
            type="submit"
            className=" bg-accent p-3 rounded-xl text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

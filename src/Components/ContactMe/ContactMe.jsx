export const ContactMe = () => {
  return (
    <div>
      <div className=" text-black bg-slate-700 p-8 my-8 h-[700px] rounded-lg ">
        <h1 className="text-4xl text-white font-bold text-center">
          Get in touch with me
        </h1>

        <h2 className="text-white text-2xl my-8">
          You can contact me directly at{" "}
          <span>
            <a className="underline" href="#">
              My@Email.com
            </a>
          </span>{" "}
          or by filling out the form below.
        </h2>

        <form
          action="submit "
          className=" max-h-[500px] text-black flex flex-col justify-center gap-4 p-8 m-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-4 rounded-md focus:outline-none border border-transparent focus:ring-2 focus:ring-accent"
          />
          <input
            className="p-4 rounded-md focus:outline-none border border-transparent focus:ring-2 focus:ring-accent"
            type="email"
            name="email"
            placeholder="Enter your email"
            required={true}
          />

          <textarea
            className="h-40 rounded-md p-4 focus:outline-none border border-transparent focus:ring-2 focus:ring-accent"
            placeholder="Write your message here..."
            required={true}
          ></textarea>
          <button className=" bg-accent p-3 rounded-xl text-black font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export const ContactMe = () => {
  return (
    <div>
      <div className=" text-black bg-slate-700 p-8 my-8 rounded-lg ">
        <h1 className="text-4xl text-white font-bold text-center py-8">
          Contact Me
        </h1>

        <h2 className="text-white text-lg p-8">
          Please contact me directly at my@email.com or through the form below.
        </h2>

        <div className="border p-4">
          <form
            action="submit "
            className="border text-white flex flex-col gap-4 p-4"
          >
            <label htmlFor="email">Email</label>
            <input
              className="p-4 rounded-md"
              type="email"
              placeholder="Enter your email"
            />

            <label htmlFor="message">Message:</label>
            <textarea
              className="h-20 rounded-md p-4"
              placeholder="Write your message here..."
            ></textarea>
            <button className=" bg-accent p-3 rounded-xl text-black font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

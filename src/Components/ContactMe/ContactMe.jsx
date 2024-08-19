export const ContactMe = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   event.target.submit();
  // };

  return (
    <div>
      <div className="container flex flex-col items-center justify-center p-8 mx-auto my-8 text-black rounded-lg ">
        <h1 className="font-[Indria] text-5xl font-bold text-center text-white lg:text-6xl sm:text-4xl">
          Get in touch with me
        </h1>

        <h2 className="text-3xl font-bold text-center text-accent">
          Thanks again for visiting!
        </h2>

        <form
          name="contact form"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit="submit"
          netlify
          className="text-black flex flex-col justify-center gap-4 p-4 mt-5 xl:w-[50%] w-[100%] sm:w-[90%] md:w-[90%]"
        >
          <input type="hidden" name="form-name" value="contact form"></input>

          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <div className="flex flex-col">
            <label className="font-bold text-white" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="p-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              required={true}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-white" htmlFor="email">
              Email
            </label>
            <input
              className="p-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required={true}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-white" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-40 p-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Write your message here..."
              required={true}
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 font-bold text-black bg-accent rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

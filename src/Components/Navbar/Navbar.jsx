import logo from "../../assets/terminalLogo.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="text-white flex items-center text-2xl p-5 font-inria ">
        <div className="mr-auto flex flex-col justify-center items-center relative after:bg-accent after:absolute after:w-40 after:h-2 after:top-24 after:left-0">
          <a href="#">
            <img src={logo} alt="letter B logo" className="h-20" />
          </a>
        </div>

        <div>
          <ul className="flex items-center justify-center gap-10 mr-10">
            <li className="relative hover:after:animate-bounce after:bg-accent after:w-full after:rounded-md after:absolute after:top-8 after:left-0 after:h-1 ">
              <a href="#">Home</a>
            </li>
            <li className="relative hover:after:bg-blue-400 hover:after:animate-bounce after:ease-in-out after:bg-gray-300 after:w-full after:rounded-md after:absolute after:top-8 after:left-0 after:h-1 ">
              <a href="#">Projects</a>
            </li>

            <li className="relative  hover:after:bg-blue-400 hover:after:animate-bounce after:ease-in-out after:bg-gray-300 after:w-full  after:rounded-md after:absolute after:top-8 after:left-0 after:h-1 ">
              <a href="#">About</a>
            </li>
            <li className="relative hover:after:bg-blue-400 hover:after:animate-bounce after:ease-in-out after:bg-gray-300  after:w-full after:rounded-md after:absolute after:top-8 after:left-0 after:h-1 ">
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

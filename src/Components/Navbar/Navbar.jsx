import logo from "../../assets/terminalLogo.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="container items-center hidden p-2 mx-auto text-white sm:flex font-inria ">
        <div className="relative flex flex-col items-center justify-center p-4 mr-auto ">
          <a href="#">
            <img src={logo} alt="letter B logo" className="h-10 lg:h-20" />
          </a>
        </div>

        <div>
          <ul className="flex items-center justify-center gap-8 mr-10 text-sm lg:text-3xl sm:text-lg">
            <li className="relative hover:after:animate-bounce after:bg-accent after:w-full after:rounded-md after:absolute after:top-8 after:left-0 after:h-1 ">
              <a href="#">Home</a>
            </li>
            <li className="relative hover:after:bg-blue-400 hover:after:animate-bounce after:ease-in-out after:bg-gray-300 after:w-full after:rounded-md after:absolute after:top-8 after:left-0 after:h-1 ">
              <a href="#">Projects</a>
            </li>

            <li className="relative hover:after:bg-blue-400 hover:after:animate-bounce after:ease-in-out after:bg-gray-300 after:w-full after:rounded-md after:absolute after:top-8 after:left-0 after:h-1 ">
              <a href="#">About</a>
            </li>
            <li className="relative hover:after:bg-blue-400 hover:after:animate-bounce after:ease-in-out after:bg-gray-300 after:w-full after:rounded-md after:absolute after:top-8 after:left-0 after:h-1 ">
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

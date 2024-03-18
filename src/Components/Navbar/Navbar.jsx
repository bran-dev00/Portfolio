import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="text-white flex items-center  text-2xl m-5">
        <img src={logo} alt="letter B logo" className="w-12 mr-auto ml-10" />

        <div>
          <ul className="flex items-center justify-center gap-10 mr-10 after:bg-[accent]">
            <li className="underline underline-offset-4">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

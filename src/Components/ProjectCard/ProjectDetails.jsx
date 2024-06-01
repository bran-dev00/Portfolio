import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "./Stack";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ImageCarousel } from "../Carousel/ImageCarousel";

const ProjectDetails = ({ title, description, img, stack, onClose }) => {
  const items = [
    "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg",
    "https://images.pexels.com/photos/4238994/pexels-photo-4238994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3769167/pexels-photo-3769167.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  // const items = [];

  const openInNewWindow = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  console.log(description);

  const formatDescription = (desc) => {
    return description?.split("\n").map((line, index) => (
      <p key={index}>
        <br />
        {line}
      </p>
    ));
  };

  return (
    <div className="container relative min-w-[80vw] flex flex-col justify-center bg-primary mx-auto min-h-screen ">
      <button
        className="w-32 h-10 m-8 font-bold text-black rounded-lg bg-accent font-poppins"
        onClick={onClose}
      >
        Close
      </button>

      <h1 className="p-8 text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl">
        {title}
      </h1>

      <div className="flex flex-col items-center justify-center gap-4">
        {items.length > 0 ? (
          <ImageCarousel items={items} />
        ) : (
          <div className="hidden"></div>
        )}

        <button
          onClick={() => openInNewWindow("https://github.com/")}
          className="flex gap-4 p-4 font-bold rounded-lg bg-secondaryRed text-text"
        >
          View Code <FontAwesomeIcon className={"fa-xl"} icon={faGithub} />
        </button>
      </div>

      <div className="p-8 mx-auto  max-w-[80%] font-poppins">
        {/* Project Description Box */}
        <div className="flex flex-col items-center gap-5 p-16 mx-auto overflow-auto border rounded-lg ">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 text-xl font-bold text-text">
              <span>Stack:</span>
              <Stack stack={stack} />
            </div>
            <h2 className="py-4 font-bold text-left font-inria text-secondaryAccent lg:text-3xl md:text-2xl sm:text-xl">
              Project Description:
            </h2>
            <p className="overflow-y-auto text-xl text-text font-poppins">
              {formatDescription(description)}
              {/* <ProjectDescription description={description} /> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

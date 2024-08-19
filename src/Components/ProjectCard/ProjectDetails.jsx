import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "./Stack";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ImageCarousel } from "../Carousel/ImageCarousel";

const ProjectDetails = ({
  title,
  description,
  screenshots,
  stack,
  onClose,
  codeLink,
}) => {
  // const items = [];

  const openInNewWindow = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

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

      <div className="flex flex-col items-center justify-center">
        <h1 className="p-8 text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl">
          {title}
        </h1>

        <button
          onClick={() => openInNewWindow(codeLink)}
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
        <div className="flex flex-col items-center justify-center gap-4">
          {screenshots?.length > 0 ? (
            <ImageCarousel items={screenshots} />
          ) : (
            <div className="hidden"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

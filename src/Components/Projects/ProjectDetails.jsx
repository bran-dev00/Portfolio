import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "./Stack";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = ({ title, description, img, stack, onClose }) => {
  return (
    <div className="container relative min-w-[80vw] flex flex-col justify-center bg-primary mx-auto min-h-screen ">
      <h1 className="  text-7xl py-8 text-center">{title}</h1>

      <div className="flex flex-col justify-center items-center gap-4">
        <img className=" h-[300px] rounded-md" src={img} alt="" />
        <button className="bg-secondaryRed text-text font-bold p-4 rounded-lg flex gap-4">
          View Code <FontAwesomeIcon className={"fa-xl"} icon={faGithub} />
        </button>
      </div>

      <div className=" mx-auto p-8 font-poppins ">
        {/* Project Description Box */}
        <div className=" border p-16 mx-auto flex flex-col gap-5 items-center overflow-auto ">
          <div className="flex flex-col items-start">
            <div className="flex gap-3 items-center text-xl text-text font-bold">
              <span>Stack:</span>
              <Stack stack={stack} />
            </div>
            <h2 className="text-left text-secondaryAccent text-3xl font-bold py-4">
              Project Description{" "}
            </h2>
            <p className=" text-text text-xl font-poppins overflow-y-auto ">
              {description}
            </p>
          </div>
        </div>
      </div>

      <button
        className="bg-accent absolute top-10 left-5 font-bold font-poppins text-black w-32 h-10 rounded-lg"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default ProjectDetails;

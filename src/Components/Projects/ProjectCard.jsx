const ProjectCard = ({
  title,
  description,
  skills,
  screenshot,
  linkToProject,
}) => {
  return (
    <div className="bg-black rounded-xl  p-10 my-5">
      <h1 className="text-white text-left text-4xl">{title}</h1>

      <div className="flex justify-between mr-auto mt-5 w-[50vw] max-h-[500px] gap-5">
        <div className="max-w-lg">
          <p>{description}</p>
        </div>

        {/* TODO: Image-Slider */}
        <div className="flex flex-col justify-center items-center">
          <img
            className=" max-w-md h-[400px] rounded-lg"
            src={screenshot}
            alt="screenshot image"
          />
          <a className="" href={linkToProject}>
            View Project
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="p-5">
        <h2>Skills:</h2>
        <ul className="gap-4 flex">
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

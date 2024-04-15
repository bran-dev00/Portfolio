export const SmallProjectCard = ({
  cardImage,
  cardTitle,
  cardDescription,
  altDescription,
}) => {
  return (
    <>
      <div className="flex flex-col w-[400px] hover:scale-95 transition-transform  ">
        <a href="#" className="hover:scale-100">
          <img
            className="w-fit h-fit rounded-tr-md rounded-tl-md"
            src={cardImage}
            alt={altDescription}
          />
        </a>

        <div className=" w-full bg-[#2b6439d7] h-[100px] text-white  p-4 rounded-br-md rounded-bl-md">
          <h1 className="text-white font-bold text-3xl">{cardDescription}</h1>
          <span>Skills:</span>
        </div>
      </div>
    </>
  );
};

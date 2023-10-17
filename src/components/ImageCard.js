import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import Modal from "./Modal";

const ImageCard = ({ image, DarkMode }) => {
  const [popUp, setPopUp] = useState(false);
  const handleShowPopUP = () => {
    setPopUp(true);
  };
  return (
    <>
      {popUp ? <Modal image={image} setPopUp={setPopUp} /> : ""}
      <div
        className={`${
          DarkMode ? "bg-black text-white" : " "
        } w-[366px] p-4 m-3 cursor-pointer  shadow-md `}
        onClick={handleShowPopUP}
      >
        <div className=" w-full h-[250px] rounded-md overflow-hidden ">
          <img src={image.urls.thumb} alt="" className=" w-full h-full " />
        </div>
        <div className="flex my-2 mx-4 items-center ">
          <img
            src={image.user.profile_image.small}
            alt=""
            className="rounded-full w-12 h-10"
          />

          <div className="  ml-4 flex justify-between items-center w-full">
            <div>
              <h1 className="font-bold ">
                {`${image.user.first_name} ${image.user.last_name}`}
              </h1>
              <p>{`@${image.user.instagram_username}`}</p>
            </div>
            <div className="flex items-center">
              <AiOutlineLike className="inline-block mx-1" />{" "}
              <span>{image.likes}k</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;

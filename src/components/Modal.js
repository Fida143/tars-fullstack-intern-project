import React from "react";
import { AiOutlineLike, AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ image, setPopUp }) => {
  return (
    <div className="flex items-center justify-center relative">
      <div
        className="bg-gray-600  fixed top-0 bottom-0 right-0 left-0 cursor-pointer z-10  opacity-80 flex items-center justify-center"
        onClick={() => setPopUp(false)}
      ></div>
      <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  shadow-xl z-50 w-[350px] p-4 rounded-md opacity-100 ">
        <span
          className="absolute -top-2  -right-2 text-2xl px-1 py-1 bg-gray-50 rounded-full shadow-md font-medium"
          onClick={() => setPopUp(false)}
        >
          <AiOutlineCloseCircle />
        </span>
        <div>
          <img
            src={image.urls.thumb}
            alt=""
            className="w-full max-h-[250px] rounded-md"
          />
        </div>
        <div className="flex my-2 mx-4 items-center ">
          <img
            src={image.user.profile_image.small}
            alt=""
            className="rounded-full w-14 h-12"
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
        <div className="ml-4">
          <p>
            <strong>Bio</strong> : {image.user.bio}
          </p>
        </div>
        <div className="ml-4">
          <p>
            <strong>Description</strong> : {image.alt_description}
          </p>
        </div>
        <div className="ml-4">
          <p>
            <strong>Location</strong> : {image.user.location}
          </p>
        </div>
        <div className="ml-4">
          <p className="w-80% overflow-hidden">
            <strong>Portfolio Link</strong> : {image.user.links.portfolio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

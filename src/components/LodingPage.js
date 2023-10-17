import React from "react";
import { FaArrowsRotate } from "react-icons/fa6";

const LodingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen ">
      <h1 className="text-6xl animate-spin">
        <FaArrowsRotate />
      </h1>
      <p className="text-black text-lg font-bold">
        Loding some awesome Images...
      </p>
    </div>
  );
};

export default LodingPage;

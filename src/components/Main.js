import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ImageCard from "./ImageCard";
import LodingPage from "./LodingPage";

const Main = ({ images, fetchApi, DarkMode, logding }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  useEffect(() => {
    fetchApi();
  }, [input]);
  return (
    <main className={`${DarkMode ? "bg-[rgb(35,35,35)] text-white" : " "}`}>
      {logding ? (
        <LodingPage />
      ) : (
        <>
          <div className="w-full relative h-[70vh] ">
            <div className=" absolute w-full h-full  ">
              <img
                src="https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bmF0aW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="h-full w-full opacity-80"
              />
            </div>
            <div className="absolute  flex flex-col items-center justify-center w-full  h-full  ">
              <h1 className=" my-2 capitalize text-4xl font-bold text-white w-[80%] text-center ">
                download high quality images by creators
              </h1>
              <p className="my-2 text-lg text-gray-600 text-center w-[70%] font-bold">
                Over 2.4 million+ stock Images by our talented community{" "}
              </p>
              <form onSubmit={handleSubmit} className=" w-[80%] md:w-[60%]">
                <div className="my-2  mx-auto flex  items-center ">
                  <button
                    className="absolute ml-8  text-xl text-black"
                    type="submit"
                  >
                    {" "}
                    <AiOutlineSearch />
                  </button>
                  <input
                    type="text"
                    placeholder="  Search high resolution images"
                    className=" w-full ml-6  px-10 py-2 rounded text-black"
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                    value={input}
                    name="input"
                  />
                </div>

                {/************************************      Search Suggestion Div    ****************************************/}

                <div className="ml-8">
                  {images.map((image, i) => {
                    if (
                      image?.tags[0]?.title
                        .toUpperCase()
                        .indexOf(input.toUpperCase()) > -1
                    ) {
                      return (
                        <div
                          key={i}
                          className={`text-black cursor-pointer  ${
                            input ? "block" : "hidden"
                          }  bg-white px-4 py-2 `}
                        >
                          {image?.tags[0]?.title}
                        </div>
                      );
                    }
                  })}
                </div>
              </form>
            </div>
          </div>

          {/* **********************             div  where all images are displayed          ********************************88888 */}

          <div className="flex flex-wrap  px-[10vw] py-10 justify-center">
            {images.map((image, i) => {
              if (
                image?.tags[0]?.title
                  .toUpperCase()
                  .indexOf(input.toUpperCase()) > -1
              ) {
                return (
                  <div key={i}>
                    <ImageCard image={image} DarkMode={DarkMode} />
                  </div>
                );
              }
            })}
          </div>
        </>
      )}
    </main>
  );
};

export default Main;

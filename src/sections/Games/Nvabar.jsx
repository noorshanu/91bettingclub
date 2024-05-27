import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FcOnlineSupport } from "react-icons/fc";

function Nvabar() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <section>
      <div className=" bg-[#212121]  mx-auto h-auto px-4 py-3 ">
        <div className=" flex justify-between items-center">
          <button onClick={goBack}>
            <IoIosArrowBack className=" text-white text-2xl" />
          </button>
          <div>
            <a href="/">
              <img src="images/logo.png" alt="" className=" h-[40px] mx-auto" />
            </a>
          </div>

          <div className=" text-white">
            <FcOnlineSupport className=" text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nvabar;

import React from "react";
import { IoHome } from "react-icons/io5";
function Footer() {
  return (
    <section className=" fixed bottom-0 left-0 right-0 mx-auto rounded-t-[40px] bg-white w-full sm:w-[500px] pt-3  ">
      <div className=" flex justify-center items-center gap-4 px-4">
        <div className=" flex justify-center flex-col text-center">
          <a href="/" className=" text-center text-4xl">
            {" "}
            <IoHome className=" text-center" />
          </a>

          <h2 className=" text-center">Home</h2>
        </div>

        <div className=" flex justify-center flex-col text-center">
          <a href="/activity" className=" text-center text-4xl">
            {" "}
            <IoHome className=" text-center" />
          </a>

          <h2 className=" text-center">Activity</h2>
        </div>

        <div className=" flex justify-center flex-col text-center">
          <a href="/promotion" className=" text-center text-4xl">
            {" "}
            <IoHome className=" text-center" />
          </a>

          <h2 className=" text-center">Promotion</h2>
        </div>

        <div className=" flex justify-center flex-col text-center">
          <a href="/wallet" className=" text-center text-4xl">
            {" "}
            <IoHome className=" text-center" />
          </a>

          <h2 className=" text-center">Wallet</h2>
        </div>

        <div className=" flex justify-center flex-col text-center">
          <a href="/main" className=" text-center text-4xl">
            {" "}
            <IoHome className=" text-center" />
          </a>

          <h2 className=" text-center">Account</h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;

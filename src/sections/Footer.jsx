import React from "react";
import { IoHome } from "react-icons/io5";
function Footer() {
  return (
    <section className=" fixed bottom-0 left-0 right-0 mx-auto rounded-t-[40px] bg-white w-full sm:w-[500px] pt-3  ">
      <div className=" flex justify-center items-center gap-4 px-4">
      <div className=" flex justify-center flex-col text-center">
        <a href="/" className=" text-center text-4xl">  <IoHome className=" text-center" /></a>

          <h2 className=" text-center">Home</h2>
        </div>

        <div className=" flex justify-center flex-col text-center">
        <a href="/" className=" text-center text-4xl">  <IoHome className=" text-center" /></a>

          <h2 className=" text-center">Home</h2>
        </div>

        <div className=" flex justify-center flex-col text-center">
        <a href="/" className=" text-center text-4xl">  <IoHome className=" text-center" /></a>

          <h2 className=" text-center">Home</h2>
        </div>

        <div className=" flex justify-center flex-col text-center">
        <a href="/" className=" text-center text-4xl">  <IoHome className=" text-center" /></a>

          <h2 className=" text-center">Home</h2>
        </div>

        <div className=" flex justify-center flex-col text-center">
        <a href="/" className=" text-center text-4xl">  <IoHome className=" text-center" /></a>

          <h2 className=" text-center">Home</h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import React from "react";
import Navbar from "../sections/Navbar";
import Banner from "../sections/Banner";
import Notification from "../sections/Notification";
import WinInfo from "../sections/WinInfo";
import EranInfo from "../sections/EranInfo";
import Footer from "../sections/Footer";
import WinStage from "../sections/WinStage";

function Home() {
  return (
    <div className=" bg-[#ecedf4] p-4">
      <div>
        <Navbar />
      </div>
      <Banner />

      <div className=" mt-4">
        <Notification />
      </div>

      <div className=" mt-4">
       <WinInfo/>
      </div>
      <div className="mt-4">
        <WinStage/>

      </div>
      <div className=" mt-4">
       <EranInfo/>
      </div>
      <div className=" mt-4">
        <Footer/>

      </div>
    </div>
  );
}

export default Home;

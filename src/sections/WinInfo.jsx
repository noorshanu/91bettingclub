import React from "react";
import WinCard from "../components/WinCard";

function WinInfo() {
  return (
    <section>
      <div>
        <h1 className=" text-2xl font-semibold ">Winning Information</h1>
      </div>

      <div className=" mt-6">
     <WinCard/>
     <WinCard/>
     <WinCard/>
     <WinCard/>
     <WinCard/>
      </div>
    </section>
  );
}

export default WinInfo;

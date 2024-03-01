import React, { useState } from "react";

import "react-tabs/style/react-tabs.css";

function Gamesecs() {
  const [activeTab, setActiveTab] = useState("lottery");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className=" my-4">
      <div>
        <div className="mx-auto max-w-md flex items-start justify-between">
          <div className="flex border-b border-gray-300 flex-col">
            <button
              className={`py-2 px-4 focus:outline-none bg-white border border-black rounded-xl my-2 shadow-md ${
                activeTab === "lottery" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick("lottery")}
            >
                <img src="images/lot.png" alt="" className=" w-auto h-[45px]" />
              Lottery
            </button>
            <button
              className={`py-2 px-4 focus:outline-none bg-white border border-black rounded-xl my-2 shadow-md ${
                activeTab === "noor" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick("noor")}
            >
                 <img src="images/cup.png" alt="" className=" w-auto h-[45px]" />
                 Popular
            </button>
            <button
              className={`py-2 px-4 focus:outline-none bg-white border border-black rounded-xl my-2 shadow-md ${
                activeTab === "king" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick("king")}
            >
                 <img src="images/cash.png" alt="" className=" w-auto h-[45px]" />
                 Casino
            </button>
          </div>
          <div className="p-4">
            {activeTab === "lottery" && (
              <p>Content for Lottery tab goes here.</p>
            )}
            {activeTab === "noor" && <p>Content for Noor tab goes here.</p>}
            {activeTab === "king" && <p>Content for King tab goes here.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gamesecs;

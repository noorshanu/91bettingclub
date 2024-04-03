import React, { useState } from "react";
import { Link } from "react-router-dom";

import "react-tabs/style/react-tabs.css";

function Gamesecs() {
  const [activeTab, setActiveTab] = useState("lottery");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className=" my-4">
      <div>
        <div className="mx-auto max-w-md flex gap-4">
          <div className="flex border-b border-gray-300 flex-col">
            <button
              className={`py-2 px-4 focus:outline-none  border border-black rounded-xl my-2 shadow-md ${
                activeTab === "lottery"
                  ? `border-b-2 border-blue-500 bg-[url("/images/bgActive.png")]`
                  : `bg-[url("/images/bgInactive.png")]`
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

          <div className="w-full">
            {activeTab === "lottery" && (
              <>
                <Link to="/wingo">
                  <div
                    style={{
                      boxShadow:
                        "0 -0.05333rem 0.13333rem #fff6f4 inset, 0 0.10667rem 0.21333rem 0.05333rem rgba(208, 208, 237, 0.36)",
                    }}
                    className="flex justify-between items-center text-white px-2 my-3 bg-gradient-to-r from-[#ff8e89] to-[#ffc3a2] border border-white rounded-3xl"
                  >
                    <div className="py-2 px-2">
                      <h2  className="font-bold text-lg">Win Go</h2>
                      <p className="text-xs mt-2">Guess Number</p>
                      <p className="text-xs">Green/Red/Purple to win</p>
                    </div>
                    <div>
                      <img
                        src="images/ball.png"
                        alt=""
                        className="w-auto h-[96px]"
                      />
                    </div>
                  </div>
                </Link>
                <Link to="/wingo">
                  <div
                    style={{
                      boxShadow:
                        "0 -0.05333rem 0.13333rem #fff6f4 inset, 0 0.10667rem 0.21333rem 0.05333rem rgba(208, 208, 237, 0.36)",
                    }}
                    className="flex justify-between items-center text-white px-2 my-3 bg-gradient-to-r from-[#ff8e89] to-[#ffc3a2] border border-white rounded-3xl"
                  >
                    <div className="py-2 px-2">
                      <h2  className="font-bold text-lg">K3</h2>
                      <p className="text-xs mt-2">Guess Number</p>
                      <p className="text-xs">Green/Red/Purple to win</p>
                    </div>
                    <div>
                      <img
                        src="images/ball.png"
                        alt=""
                        className="w-auto h-[96px]"
                      />
                    </div>
                  </div>
                </Link>
                <Link to="/wingo">
                  <div
                    style={{
                      boxShadow:
                        "0 -0.05333rem 0.13333rem #fff6f4 inset, 0 0.10667rem 0.21333rem 0.05333rem rgba(208, 208, 237, 0.36)",
                    }}
                    className="flex justify-between items-center text-white px-2 my-3 bg-gradient-to-r from-[#ff8e89] to-[#ffc3a2] border border-white rounded-3xl"
                  >
                    <div className="py-2 px-2">
                      <h2  className="font-bold text-lg">K3</h2>
                      <p className="text-xs mt-2">Guess Number</p>
                      <p className="text-xs">Green/Red/Purple to win</p>
                    </div>
                    <div>
                      <img
                        src="images/ball.png"
                        alt=""
                        className="w-auto h-[96px]"
                      />
                    </div>
                  </div>
                </Link>
                <Link to="/wingo">
                  <div
                    style={{
                      boxShadow:
                        "0 -0.05333rem 0.13333rem #fff6f4 inset, 0 0.10667rem 0.21333rem 0.05333rem rgba(208, 208, 237, 0.36)",
                    }}
                    className="flex justify-between items-center text-white px-2 my-3 bg-gradient-to-r from-[#ff8e89] to-[#ffc3a2] border border-white rounded-3xl"
                  >
                    <div className="py-2 px-2">
                      <h2  className="font-bold text-lg">K3</h2>
                      <p className="text-xs mt-2">Guess Number</p>
                      <p className="text-xs">Green/Red/Purple to win</p>
                    </div>
                    <div>
                      <img
                        src="images/ball.png"
                        alt=""
                        className="w-auto h-[96px]"
                      />
                    </div>
                  </div>
                </Link>
              </>
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

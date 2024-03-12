import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { useState, useEffect } from "react";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import HowToPlay from "./HowToPlay";

function GameSection() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Increment seconds
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          // Increment minutes when seconds reach 59
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0; // Reset seconds to 0
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mx-auto max-w-md flex flex-col items-start justify-between ">
      <div className=" w-full my-4">
        <Tabs>
          <TabList>
            <Tab>
              <p>Win Go</p>
              <p>1 min</p>
            </Tab>
            <Tab>
              <p>Win Go</p>
              <p>3 min</p>
            </Tab>
            <Tab>
              <p>Win Go</p>
              <p>5 min</p>
            </Tab>
            <Tab>
              <p>Win Go</p>
              <p>10 min</p>
            </Tab>
          </TabList>

          <TabPanel className="w-full">
            <div className=" bg-white shadow-lg rounded-3xl p-4 w-full">
              <div className=" flex justify-between items-center ">
                <div>
                  <div>
                    <HowToPlay />
                  </div>

                  <h2 className=" font-medium  ml-3 text-sm">win Go 1 min</h2>
                  <div className=" flex gap-2 items-center py-2 pr-4">
                    <img
                      src="images/ball/ball3.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball5.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball8.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball9.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball10.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                  </div>
                </div>
                <div>
                  <h2>Time Remaining</h2>
                  <div className="flex items-center justify-center w-full">
                    <div className="text-4xl font-bold">
                      {minutes.toString().padStart(2, "0")}:
                      {seconds.toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" bg-white shadow-lg rounded-3xl p-4 w-full">
              <div className=" flex justify-between items-center ">
                <div>
                  <div>
                    <HowToPlay />
                  </div>

                  <h2 className=" font-medium  ml-3 text-sm">win Go 1 min</h2>
                  <div className=" flex gap-2 items-center py-2 pr-4">
                    <img
                      src="images/ball/ball3.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball5.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball8.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball9.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball10.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                  </div>
                </div>
                <div>
                  <h2>Time Remaining</h2>
                  <div className="flex items-center justify-center w-full">
                    <div className="text-4xl font-bold">
                      {minutes.toString().padStart(2, "0")}:
                      {seconds.toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" bg-white shadow-lg rounded-3xl p-4 w-full">
              <div className=" flex justify-between items-center ">
                <div>
                  <div>
                    <HowToPlay />
                  </div>

                  <h2 className=" font-medium  ml-3 text-sm">win Go 1 min</h2>
                  <div className=" flex gap-2 items-center py-2 pr-4">
                    <img
                      src="images/ball/ball3.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball5.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball8.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball9.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball10.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                  </div>
                </div>
                <div>
                  <h2>Time Remaining</h2>
                  <div className="flex items-center justify-center w-full">
                    <div className="text-4xl font-bold">
                      {minutes.toString().padStart(2, "0")}:
                      {seconds.toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" bg-white shadow-lg rounded-3xl p-4 w-full">
              <div className=" flex justify-between items-center ">
                <div>
                  <div>
                    <HowToPlay />
                  </div>

                  <h2 className=" font-medium  ml-3 text-sm">win Go 1 min</h2>
                  <div className=" flex gap-2 items-center py-2 pr-4">
                    <img
                      src="images/ball/ball3.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball5.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball8.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball9.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                    <img
                      src="images/ball/ball10.png"
                      alt=""
                      className=" h-[26px] w-auto"
                    />
                  </div>
                </div>
                <div>
                  <h2>Time Remaining</h2>
                  <div className="flex items-center justify-center w-full">
                    <div className="text-4xl font-bold">
                      {minutes.toString().padStart(2, "0")}:
                      {seconds.toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div className=" flex justify-center items-center gap-6 w-full">
        <div className=" bg-green-600 rounded-full py-2 px-6 shadow-md">
          <h2 className=" text-lg font-semibold text-white">Green</h2>
        </div>

        <div className=" bg-[#b659fe] shadow-md rounded-full py-2 px-6">
          <h2 className=" text-lg font-semibold text-white">Violet</h2>
        </div>

        <div className=" bg-[#fd565c] shadow-md rounded-full py-2 px-6">
          <h2 className=" text-lg font-semibold text-white">Red</h2>
        </div>
      </div>

      <div className=" bg-gray-500 rounded-3xl p-4 my-2 w-full">
        <div className=" grid grid-cols-5 gap-2 mx-auto">
          <img
            src="images/ball/ball1.png"
            alt=""
            className=" h-[26px] w-auto"
          />
          <img
            src="images/ball/ball2.png"
            alt=""
            className=" h-[26px] w-auto"
          />
          <img
            src="images/ball/ball3.png"
            alt=""
            className=" h-[26px] w-auto"
          />
          <img
            src="images/ball/ball4.png"
            alt=""
            className=" h-[26px] w-auto"
          />
          <img
            src="images/ball/ball5.png"
            alt=""
            className=" h-[26px] w-auto"
          />

          <img
            src="images/ball/ball6.png"
            alt=""
            className=" h-[26px] w-auto"
          />
          <img
            src="images/ball/ball7.png"
            alt=""
            className=" h-[26px] w-auto"
          />
          <img
            src="images/ball/ball8.png"
            alt=""
            className=" h-[26px] w-auto"
          />
          <img
            src="images/ball/ball9.png"
            alt=""
            className=" h-[26px] w-auto"
          />
          <img
            src="images/ball/ball10.png"
            alt=""
            className=" h-[26px] w-auto"
          />
        </div>
      </div>
      <div>
        <div className=" flex items-center gap-0">

          <div className=" rounded-full border ">
              <p>Random</p>
          </div>

          <div className=" rounded-xl border ">
              <p>1x</p>
          </div>

          <div className=" rounded-xl border ">
              <p>5x</p>
          </div>
          <div className=" rounded-xl border ">
              <p>10x</p>
          </div>
          <div className=" rounded-xl border ">
              <p>20x</p>
          </div>

          <div className=" rounded-xl border ">
              <p>50x</p>
          </div>
          <div className=" rounded-xl border ">
              <p>100x</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameSection;

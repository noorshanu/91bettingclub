import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HowToPlay from "./HowToPlay";
import GameHistory from "./GameHistory";
import BalancePopup from "./Pop";

function GameSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [minutes, setMinutes] = useState(1); // Start from 1 minute
  const [seconds, setSeconds] = useState(0);

  const tabDurations = [1, 3, 5, 10];

  useEffect(() => {
    const timer = setInterval(() => {
      // Decrement time if it's not zero
      if (minutes > 0 || seconds > 0) {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      } else {
        // Reset timer based on the selected tab duration
        setMinutes(tabDurations[selectedTab]);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds, selectedTab]);

  const handleTabSelect = (index) => {
    if (selectedTab !== index) {
      const selectedDuration = tabDurations[index];
      setSelectedTab(index);
      setMinutes(selectedDuration);
      setSeconds(0);
    }
  };

  return (
    <div className="mx-auto max-w-md flex flex-col items-start justify-between">
      <div className="w-full my-4">
        <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
          <TabList>
            {tabDurations.map((duration, index) => (
              <Tab key={index}>
                <button>
                  <p>Win Go</p>
                  <p>{duration} min</p>
                </button>
              </Tab>
            ))}
          </TabList>

          {tabDurations.map((duration, index) => (
            <TabPanel key={index} className="w-full">
              <div className="bg-white shadow-lg rounded-3xl p-4 w-full">
                <div className="flex justify-between items-center">
                  <div>
                    <div>
                      <HowToPlay />
                    </div>

                    <h2 className="font-medium ml-3 text-sm">
                      win Go {duration} min
                    </h2>
                    <div className="flex gap-2 items-center py-2 pr-4">
                      {/* Images */}
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
          ))}
        </Tabs>
      </div>

      <div className=" flex justify-center items-center gap-6 w-full">
        <BalancePopup name="Green" />
        <BalancePopup name="Violet" />
        <BalancePopup name="Red" />
      </div>

      <div className=" bg-[#eeeeee]  border border-[#fe5444]  rounded-3xl p-2 my-2 w-full">
        <div className=" grid grid-cols-5 gap-2 mx-auto px-8 py-1">
          <div onClick={() => <BalancePopup name="Green" />}>
            <img
              src="images/ball/ball1.png"
              alt=""
              className=" h-[46px] w-auto"
            />
          </div>
          <img
            src="images/ball/ball2.png"
            alt=""
            className=" h-[46px] w-auto"
          />
          <img
            src="images/ball/ball3.png"
            alt=""
            className=" h-[46px] w-auto"
          />
          <img
            src="images/ball/ball4.png"
            alt=""
            className=" h-[46px] w-auto"
          />
          <img
            src="images/ball/ball5.png"
            alt=""
            className=" h-[46px] w-auto"
          />

          <img
            src="images/ball/ball6.png"
            alt=""
            className=" h-[46px] w-auto"
          />
          <img
            src="images/ball/ball7.png"
            alt=""
            className=" h-[46px] w-auto"
          />
          <img
            src="images/ball/ball8.png"
            alt=""
            className=" h-[46px] w-auto"
          />
          <img
            src="images/ball/ball9.png"
            alt=""
            className=" h-[46px] w-auto"
          />
          <img
            src="images/ball/ball10.png"
            alt=""
            className=" h-[46px] w-auto"
          />
        </div>
      </div>
      <div>
        <div className=" flex items-center gap-0 my-3">
          <div className=" rounded-full border border-[#fe5444] py-1 px-6 mr-2 font-bold hover:bg-amber-500 cursor-pointer ">
            <p>Random</p>
          </div>

          <div className=" rounded-full border border-[#fe5444] py-1 px-2 mr-2 font-bold hover:bg-amber-500 cursor-pointer ">
            <p>1x</p>
          </div>

          <div className=" rounded-full border border-[#fe5444] py-1 px-2 mr-2 font-bold hover:bg-amber-500 cursor-pointer ">
            <p>5x</p>
          </div>
          <div className=" rounded-full border border-[#fe5444] py-1 px-2 mr-2 font-bold hover:bg-amber-500 cursor-pointer ">
            <p>10x</p>
          </div>
          <div className=" rounded-full border border-[#fe5444] py-1 px-2 mr-2 font-bold hover:bg-amber-500 cursor-pointer ">
            <p>20x</p>
          </div>

          <div className=" rounded-full border border-[#fe5444] py-1 px-2 mr-2 font-bold hover:bg-amber-500 cursor-pointer ">
            <p>50x</p>
          </div>
          <div className=" rounded-full border border-[#fe5444] py-1 px-2 mr-2 font-bold hover:bg-amber-500 cursor-pointer ">
            <p>100x</p>
          </div>
        </div>
        <div className=" mt-4">
          <GameHistory />
        </div>
      </div>
    </div>
  );
}

export default GameSection;

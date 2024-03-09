import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { useState, useEffect } from 'react';


function GameSection() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      // Increment seconds
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          // Increment minutes when seconds reach 59
          setMinutes(prevMinutes => prevMinutes + 1);
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
      <div>
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

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <div className=" flex justify-between items-center ">

          <div>
            <div>
              <p>how to play</p>
            </div>

            <h2>
              win Go 1 min
            </h2>
            <div>
              <img src="images/ball/ball8.png" alt="" />
            </div>
          </div>
          <div>
            <h2>Time Remaining</h2>
            <div className="flex items-center justify-center w-full">
      <div className="text-4xl font-bold">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
    </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default GameSection;

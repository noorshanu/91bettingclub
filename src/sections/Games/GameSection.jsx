import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";

import HowToPlay from "./HowToPlay";
import GameHistory from "./GameHistory";
import BalancePopup from "./Pop";
import betApi from "./Pop";

import { getCookie } from "./utils"; // Import the utility function

function GameSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [csrfToken, setCsrfToken] = useState('');

  const tabDurations = [1, 3, 5, 10];

  useEffect(() => {
    const token = getCookie('csrftoken'); // Get the CSRF token from cookies
    setCsrfToken(token);
  }, []);

  const fetchGameData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'https://game.myclub11.com/wingo/random_gen/',
        {},
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': "IEpkuek3WGbQVlcBNYvwsGZf4sf70bF8",
          }
        }
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError('An error occurred while fetching the data.');
      if (error.response && error.response.status === 403) {
        console.error('Error 403: Forbidden. Check your authentication credentials and permissions.');
      } else {
        console.error('Error fetching data:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes > 0 || seconds > 0) {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      } else {
        setMinutes(tabDurations[selectedTab]);
        setSeconds(0);
        clearInterval(timer);
        fetchGameData();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds, selectedTab, csrfToken]);

  const handleTabSelect = (index) => {
    if (selectedTab !== index) {
      setSelectedTab(index);
      setMinutes(tabDurations[index]);
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
                    <HowToPlay />
                    <h2 className="font-medium ml-3 text-sm">
                      Win Go {duration} min
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

      <div className="flex justify-center items-center gap-6 w-full">
        <BalancePopup name="Green" />
        <BalancePopup name="Violet" />
        <BalancePopup name="Red" />
      </div>

      <div className="bg-[#eeeeee] border border-[#fe5444] rounded-3xl p-2 my-2 w-full">
        <div className="grid grid-cols-5 gap-2 mx-auto px-8 py-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} onClick={() => <BalancePopup name="Green" />}>
              <img
                src={`images/ball/ball${i + 1}.png`}
                alt=""
                className="h-[46px] w-auto cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-0 my-3">
          {['Random', '1x', '5x', '10x', '20x', '50x', '100x'].map((label, i) => (
            <div
              key={i}
              className="rounded-full border border-[#fe5444] py-1 px-2 mr-2 font-bold hover:bg-amber-500 cursor-pointer"
            >
              <p>{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <GameHistory />
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default GameSection;

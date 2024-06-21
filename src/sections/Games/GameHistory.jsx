import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";

function GameHistory() {
  const [data, setData] = useState([
    { name: 'John Doe', number: '123456', class: 'A', top: '10' },
    { name: 'Jane Doe', number: '654321', class: 'B' },
    { name: 'Alice Smith', number: '987654', class: 'C' },
    { name: 'Bob Johnson', number: '456789', class: 'A' },
    { name: 'Emily Davis', number: '321654', class: 'B' },
    { name: 'Michael Brown', number: '789456', class: 'C' },
    { name: 'Emma Wilson', number: '852963', class: 'A' },
    { name: 'David Lee', number: '369258', class: 'B' },
    { name: 'Sarah Clark', number: '147852', class: 'C' },
    { name: 'James Taylor', number: '951753', class: 'A' },
  ]);

  const fetchRandomNumbers = async () => {
    try {
      const response = await axios.get("https://game.myclub11.com/wingo/random_gen/"); // Replace with your API endpoint
      const updatedData = data.map((item, index) => ({
        ...item,
        number: response.data[index] || item.number,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching random numbers:", error);
    }
  };

  useEffect(() => {
    fetchRandomNumbers();
  }, []);

  return (
    <div className="mx-auto max-w-md flex flex-col items-start justify-between">
      <div className="w-full my-4">
        <Tabs>
          <TabList>
            <Tab>
              <p>Game History</p>
            </Tab>
            <Tab>
              <p>Chart</p>
            </Tab>
            <Tab>
              <p>My History</p>
            </Tab>
          </TabList>

          <TabPanel className="w-full">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-[#fe5444] rounded-xl border">
                    <th className="border px-4 py-2 text-white">Period</th>
                    <th className="border px-4 py-2 text-white">Number</th>
                    <th className="border px-4 py-2 text-white">Big Small</th>
                    <th className="border px-4 py-2 text-white">Color</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">{item.number}</td>
                      <td className="border px-4 py-2">{item.class}</td>
                      <td className="border px-4 py-2">{item.top}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Number</th>
                    <th className="border px-4 py-2">Class</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">{item.number}</td>
                      <td className="border px-4 py-2">{item.class}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Number</th>
                    <th className="border px-4 py-2">Class</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">{item.number}</td>
                      <td className="border px-4 py-2">{item.class}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default GameHistory;

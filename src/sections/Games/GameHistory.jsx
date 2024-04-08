import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function GameHistory() {
    const data = [
        { name: 'John Doe', number: '123456', class: 'A', top:'10' },
        { name: 'Jane Doe', number: '654321', class: 'B' },
        { name: 'Alice Smith', number: '987654', class: 'C' },
        { name: 'Bob Johnson', number: '456789', class: 'A' },
        { name: 'Emily Davis', number: '321654', class: 'B' },
        { name: 'Michael Brown', number: '789456', class: 'C' },
        { name: 'Emma Wilson', number: '852963', class: 'A' },
        { name: 'David Lee', number: '369258', class: 'B' },
        { name: 'Sarah Clark', number: '147852', class: 'C' },
        { name: 'James Taylor', number: '951753', class: 'A' },
      ];
  return (
    <div className='mx-auto max-w-md flex flex-col items-start justify-between'>
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
          <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Number</th>
            <th className="border px-4 py-2">Class</th>
            <th className="border px-4 py-2">top</th>
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
  )
}

export default GameHistory
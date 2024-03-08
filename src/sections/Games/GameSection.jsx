import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function GameSection() {
  return (
    <div className="mx-auto max-w-md flex items-start justify-between ">
        <div>
        <Tabs>
    <TabList>
      <Tab><p>Win Go</p>
      <p>1 min</p></Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

        </div>
        
        </div>
  )
}

export default GameSection
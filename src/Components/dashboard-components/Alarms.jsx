import { useState } from 'react';
import AllAlarms from './AllAlarms';
import Fault from './Fault';
import Fire from './Fire';
import Inactive from './Inactive';

const content = [
  {
    id: 0,
    topic: 'فالت',
    component: <Fault />,
  },
  {
    id: 1,
    topic: 'فایر',
    component: <Fire />,
  },
  {
    id: 2,
    topic: 'غیر فعال',
    component: <Inactive />,
  },
  {
    id: 3,
    topic: 'همه',
    component: <AllAlarms />,
  },
];

function Alarms() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-bg-light-color-4 mt-4 flex flex-col  gap-4  rounded-3xl p-4">
      <div className=" flex  flex-row justify-between text-center">
        <p className=" text-2xl text-main-color-1">هشدارها !</p>
        <div className=" flex flex-row gap-2">
          {content.map((tab) => (
            <button
              className={
                activeTab !== tab.id
                  ? ' text-text-darkGray-color font-peyda text-sm '
                  : ' bg-bg-orange rounded-xl p-1 font-peydaMedium text-base text-text-light-color'
              }
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.topic}
            </button>
          ))}
        </div>
      </div>
      <div className=" self-center">{content.at(activeTab).component}</div>
    </div>
  );
}

export default Alarms;

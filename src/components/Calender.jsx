import HeatmapCalender from './HeatmapCalender';
import React, { useEffect, useState } from 'react';

const Heatmap = () => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    fetch('/api/user-activity')  // Correct path for API route
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (data.userActivity) {
          setActivityData(data.userActivity);
        } else {
          console.error('Data format is incorrect', data);
        }
      })
      .catch(err => console.error('There has been an error while fetching data', err));
  }, []);

  return (
    <section className='h-screen w-full bg-zinc-900 flex flex-row justify-center items-center'>
      <div className='flex'>
        <span className='flex flex-col justify-around py-2 text-gray-300 text-xs text-right pr-3'>
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </span>
        {/* <HeatmapCalender startDate={'2024-09-01'} endDate={'2024-12-13'} dataValues={activityData} /> */}
      </div>
    </section>
  );
}

export default Heatmap;

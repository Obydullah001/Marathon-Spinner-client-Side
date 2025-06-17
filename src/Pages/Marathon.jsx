import React, { useState, useEffect } from 'react';
import MarathonEventCard from '../Components/MarathonEventCard';

const Marathon = () => {
  const [marathonEvent, setMarathonEvent] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // Default: Newest first

  useEffect(() => {
    fetch(`https://marathon-spinner-server-g5biatqim-obydullah001s-projects.vercel.app/events?sortOrder=${sortOrder}`)
      .then(res => res.json())
      .then(data => setMarathonEvent(data));
  }, [sortOrder]); // Refetch when sortOrder changes

  return (
    <div>
      <h1 className='text-center text-4xl text-amber-400 mt-5'>All Marathon Events</h1>
      <p className='text-2xl font-bold text-center mb-5'>Sort By Date where added Newest First Or Oldest First  </p>

      {/* Sorting Dropdown */}
      <div className='text-center mb-4'>
        <select
          className='input input-bordered w-1/3'
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
        {marathonEvent.map(events => (
          <MarathonEventCard key={events._id} events={events}></MarathonEventCard>
        ))}
      </div>
    </div>
  );
};

export default Marathon;
import React, { useState, useEffect, use } from 'react';
import MarathonEventCard from '../Components/MarathonEventCard';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';


const Marathon = () => {
  const [marathonEvent, setMarathonEvent] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); 
  const {user} = use(AuthContext)

  useEffect(() => {
    fetch(`https://marathon-spinner-server.vercel.app/events?sortOrder=${sortOrder}`,{headers: {
            authorization: `Bearer ${user?.accessToken}`
        }})
      .then(res => res.json())
      .then(data => setMarathonEvent(data))
  }, [sortOrder, user]); 

  return (
    <div>
      <h1 className='text-center text-4xl text-amber-400 mt-5'>All Marathon Events</h1>
      <p className='text-2xl font-bold text-center mb-5'>Sort By Date where added Newest First Or Oldest First  </p>

      
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
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import MarathonEventCard from '../Components/MarathonEventCard';

const Marathon = () => {
    const marathonEvent = useLoaderData();
    console.log(marathonEvent);
    const {_id}= marathonEvent
   
    
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            marathonEvent.map(events => <MarathonEventCard key={_id} events={events}></MarathonEventCard>)
        }
      </div>
    );
};

export default Marathon;
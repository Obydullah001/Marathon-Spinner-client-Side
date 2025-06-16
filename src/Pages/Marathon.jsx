import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';
import MarathonEventCard from '../Components/MarathonEventCard';
import { myRegisteredPromise } from '../Components/api/registeredApi';

const Marathon = () => {
    const marathonEvent = useLoaderData();
    // const totalRegistration = use(myRegisteredPromise);
    console.log(marathonEvent);
    const {_id}= marathonEvent
   
    
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {/* <h1>Total Number Of Registration Added are {totalRegistration.length} </h1> */}
        {
            marathonEvent.map(events => <MarathonEventCard key={_id} events={events}></MarathonEventCard>)
        }
      </div>
    );
};

export default Marathon;
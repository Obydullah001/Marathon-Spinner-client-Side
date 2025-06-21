import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import AddedEvents from './AddedEvents';


const MyMarathon = () => {
    
    const [events , setEvents]= useState([]);
    const [searchText, setSearchText] = useState('');
    console.log(events);
    const {user}= use(AuthContext);
    console.log(user);

    const filteredEvents = events?.filter(myEvent=> myEvent.email == user.email );
    console.log(filteredEvents);
    const searchedEvents = filteredEvents?.filter(event =>
    event.title.toLowerCase().includes(searchText.toLowerCase())
  );




     useEffect(()=>{
        fetch('https://marathon-spinner-server.vercel.app/events',
          {headers: {
            authorization: `Bearer ${user?.accessToken}`
        }}
        )
        .then(res=> res.json())
        .then(data =>{
            setEvents(data);
            
        })
    },[])

    if (!user) {
         return <p className="text-center mt-10 text-lg">Loading user data...</p>
    }
 
    
    return (
         <div className='mb-16'>
        <h1 className='text-center font-serif text-3xl p-1.5 text-emerald-700'> See Your List What you  Personally have Added </h1>
        <p className=' font-sans text-center pb-9 text-lg'>Your Added List Has been given Here  </p>
             <div className='text-center mb-4'>
        <input
          type='text'
          className='input input-bordered w-1/2'
          placeholder='Search by Marathon Title...'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

         <div className='overflow-x-auto  '>
            <table className='w-full border ' >
            <thead className='text-left font-bold border-2 border-blue-800 shadow-2xs '>
              <td className='pl-5 py-5'>Title</td>
              <td>Description</td>
              <td>Location</td>
              <td>Distance</td>
              <td>Update </td>
              <td>Delete</td>
            </thead>
            <tbody className=''>
           {
            searchedEvents.map(myEvent=><AddedEvents key={myEvent._id} events={events} setEvents={setEvents} myEvent={myEvent} ></AddedEvents>)
           }
            </tbody>
            </table>
         </div>
       </div>
    );
};

export default MyMarathon;
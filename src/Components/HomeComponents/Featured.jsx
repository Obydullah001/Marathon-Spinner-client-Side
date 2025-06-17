import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Featured = () => {

    const [afford, setAfford] = useState([]);
    console.log(afford);
    

  useEffect(() => {
    fetch("http://localhost:3000/events/availability")
      .then((res) => res.json())
      .then((data) => {
        setAfford(data);
      });
  }, []);

    return (
         <div className="w-11/12 mx-auto my-14 ">
      <div className="text-center">
        <p className="text-2xl opacity-80" > Ready For All UpComing Marathon  </p>
      <h1 className="text-4xl p-1.5 hover:text-blue-400 "> Get Your Preferred Marathon </h1>
      <p className="text-md mb-6"> Gives the freedom to choose wisely Your apartment </p>
      </div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {afford.map( avail => ( 
  <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img 
    className='h-72'
      src={avail.marathonImage}
      alt="Apartment" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {avail.title}
      
    </h2>
    <p>{avail.description} </p>
    <div>
        <div>Registration Start Date: {avail.startDate} </div>
      <div>Registration End Date: {avail.endDate}</div>
      </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Location: {avail.location}</div>
      
     <Link to={`/eventDetails/${avail._id}`}>
      <button className="badge badge-outline btn bg-amber-200 text-blue-800">See More </button>
     </Link>
    </div>
  </div>
</div>
))}

      </div>
    </div>
    );
};

export default Featured;
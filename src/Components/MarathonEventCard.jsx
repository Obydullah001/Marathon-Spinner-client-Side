import React from 'react';
import { Link } from 'react-router';

const MarathonEventCard = ({events}) => {
    console.log(events);
     const {
            _id,
            title ,
            startDate,
            endDate,
            location,
            marathonImage
        } = events  
    return (
        <div className="card bg-base-100 sm:w-48 md:w-72 lg:w-96  shadow-sm">
  <figure>
    <img
      src={marathonImage}
      className='h-[260px] w-md'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{location}</p>
    <div className=" justify-between">
      <div className=" font-semibold">Registration Starts {startDate}</div>
      <div className="font-semibold ">Registration Ends {endDate} </div>
    </div>
    <Link to={`/eventDetails/${_id}`} className='btn btn-primary'>See More...</Link>
  </div>
</div>
    );
};

export default MarathonEventCard;
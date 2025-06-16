import React from 'react';
import { Link, useLoaderData } from 'react-router';

const EventDetails = () => {
    const events  = useLoaderData();
    console.log(events);
    const {
            _id,
            title ,
            startDate,
            endDate,
            location,
            marathonImage,
            distance,
            description,
            createdDate,
            name,
            marathonStartDate
    }= events


      const currentDate = new Date();
      const registrationStart = new Date(startDate);
      const registrationEnd = new Date(endDate);

      const hasStarted = currentDate >= registrationStart;
      const notEnded = currentDate <= registrationEnd;
      const isRegistrationOpen = hasStarted && notEnded;
    
    return (
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<Link rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Marathon Location: {location}</Link>
		</div>
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={marathonImage} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-2xl">
				<span>{title}</span>
			</div>
		</div>
		<div className="space-y-2">
			<Link rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">{description}</h3>
			</Link>
			<p className="leading-snug dark:text-gray-600">Registration Starts at :{startDate} </p>
			<p className="leading-snug dark:text-gray-600">Registration Ends at :{endDate} </p>

            

		</div>

        <div>
            <p>Marathon Starts At {marathonStartDate} </p>
            <p>Total Distance {distance} </p>
            <p> Create By  {name} </p>
            <p>Event Created At  {createdDate} </p>
        </div>
       <div className="mt-4">
          {isRegistrationOpen ? (
            <Link to={`/registerEvent/${_id}`}>
              <button className="btn btn-success">Registration Open</button>
            </Link>
          ) : (
            <button className="btn btn-error disabled">
              Registration Closed
            </button>
          )}
        </div>
	</div>
</div>
    );
};

export default EventDetails;
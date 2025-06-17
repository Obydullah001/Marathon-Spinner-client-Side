import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import RegistrationCount from './RegistrationCount';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


const EventDetails = () => {
    const events  = useLoaderData();
    const {registered_id}= useParams()
    console.log(registered_id);
    
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
            marathonStartDate ,
            registrationCount
    }= events


      const currentDate = new Date();
      const registrationStart = new Date(startDate);
      const registrationEnd = new Date(endDate);

      const hasStarted = currentDate >= registrationStart;
      const notEnded = currentDate <= registrationEnd;
      const isRegistrationOpen = hasStarted && notEnded;

      const startTimestamp = new Date(marathonStartDate).getTime() / 1000; // Convert to seconds
      const currentTimestamp = Date.now() / 1000; // Convert to seconds
      const timeUntilMarathon = startTimestamp - currentTimestamp;

    
    return (
      <div className="max-w-5xl p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto my-7">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<Link rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-amber-400 text-4xl text-amber-400">Marathon Location: {location}</Link>
		</div>
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={marathonImage} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-2xl">
				<span>{title}</span>
			</div>

		</div>
		<div className='flex justify-between'>
      <div className="space-y-2">
			<Link rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">{description}</h3>
			</Link>
			<p className="leading-snug dark:text-gray-600">Registration Starts at :{startDate} </p>
			<p className="leading-snug dark:text-gray-600">Registration Ends at :{endDate} </p>

            <h1>Total Registration {registrationCount?registrationCount : 0} </h1>
            <p>Marathon Starts At {marathonStartDate} </p>
            <p>Total Distance {distance} </p>

		</div>
       <div>
            
            <div className="text-center -mt-9">
          <h2 className="text-lg font-semibold">Countdown Until Marathon Starts</h2>
          <CountdownCircleTimer
            isPlaying
            duration={timeUntilMarathon} // Time in seconds until the marathon
            colors={['#004777', '#F7B801', '#A30000']}
            colorsTime={[timeUntilMarathon / 2, timeUntilMarathon / 4, 0]}
            size={150}
          >
          {({ remainingTime }) => {
              const days = Math.floor(remainingTime / (60 * 60 * 24));
              const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
              const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
              return (
                <div>
                  <p>{days}d {hours}h {minutes}m</p>
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>
            <p> Create By  {name} </p>
            <p>Event Created At  {createdDate} </p>
        </div>
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
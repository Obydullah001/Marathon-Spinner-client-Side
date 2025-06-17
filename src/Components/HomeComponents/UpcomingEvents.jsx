import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="mt-8 mx-auto">
      <h1 className="text-center text-4xl">Prepare For UpComing Event</h1>
      <p className="text-center">Get Your Upcoming Events Correctly</p>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* CARD 1 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
            className="h-72"
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWV8ZW58MHx8MHx8fDA%3D"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">UpComing Japan Marathon</h2>
            <p>
              Registration starting at 7 July
            </p>
            <p>Starts race with 50 kilometers </p>
            <div className="card-actions justify-end">
              <button className="btn bg-orange-300">Explore Now</button>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
            className="h-72"
              src="https://img.freepik.com/free-photo/st-thomas-harbor_649448-3036.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">UpComing porto Rico Marathon</h2>
            <p>
              Registration starting at 10 July
            </p>
            <p>Starts race with 20 kilometers </p>
            <div className="card-actions justify-end">
              <button className="btn bg-orange-300">Explore Now</button>
            </div>
          </div>
        </div>
{/* card 3 */}
<div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
            className="h-72"
              src="https://img.freepik.com/free-photo/aerial-shot-beautiful-city-riga-latvia-winter_181624-28696.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">UpComing  Helsinki Marathon</h2>
            <p>
              Registration starting at 10 July
            </p>
            <p>Starts race with 12 kilometers </p>
            <div className="card-actions justify-end">
              <button className="btn bg-orange-300">Explore Now</button>
            </div>
          </div>
        </div>
{/* card 4 */}
<div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
            className="h-72"
              src="https://img.freepik.com/premium-photo/brandenburg-gate-sunset-german-iconic-interest-location_115067-87.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">UpComing porto Berlin Marathon</h2>
            <p>
              Registration starting at 20th July
            </p>
            <p>Starts race with 12 kilometers </p>
            <div className="card-actions justify-end">
              <button className="btn bg-orange-300">Explore Now</button>
            </div>
          </div>
        </div>

{/* card 5 */}
<div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
            className="h-72"
              src="https://img.freepik.com/premium-photo/sydney-cbd-from-ferry-boat_2431-347.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Start Marathon In Sydney</h2>
            <p>
              Registration starting at 21th July
            </p>
            <p>Starts race with 12 kilometers </p>
            <div className="card-actions justify-end">
              <button className="btn bg-orange-300">Explore Now</button>
            </div>
          </div>
        </div>
{/* card 6 */}
<div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
            className="h-72"
              src="https://img.freepik.com/free-photo/high-angle-shot-city-buildings-new-york-manhattan_181624-24684.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Start Marathon In New York</h2>
            <p>
              Registration starting at 29th July
            </p>
            <p>Starts race with 50 kilometers </p>
            <div className="card-actions justify-end">
              <button className="btn bg-orange-300">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;

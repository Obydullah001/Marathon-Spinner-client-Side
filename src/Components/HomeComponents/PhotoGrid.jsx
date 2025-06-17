import React from "react";

const PhotoGrid = () => {
  return (
    <div className="my-8 w-11/12 mx-auto ">
      <p className="text-center pt-28 pb-0.5 text-xl font-semibold opacity-85">
        {" "}
        Browse a wide range of Events to match your  preferences.
      </p>
      <h1 className="text-center text-2xl lg:text-5xl text-blue-500 py-2.5">
        {" "}
        Explore Different Catalogs to Find Marathon Events{" "}
      </h1>
      <p className="text-center  ">
        Discover a variety of Marathon options tailored to your needs. Browse
        through diverse choices, compare styles and setups, <br /> and find the
        perfect map that fits your preferences, budget, and lifestyle
        seamlessly.
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 ">
        <div className="col-span-1 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1720799360978-39ca480cf40d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJ1bm5pbmclMjBldmVudHN8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <img
            src="https://images.unsplash.com/photo-1553079358-a1f7fdc539c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJ1bm5pbmclMjBldmVudHN8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="col-span-1 ">
          <img
            src="https://images.unsplash.com/flagged/photo-1562196662-12a4f11d6808?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="row-span-1 col-span-1">
          <img
            src="https://img.freepik.com/free-photo/couple-training-morning_1098-3674.jpg?uid=R198086361&ga=GA1.1.483574112.1745928912&semt=ais_hybrid&w=740"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="col-span-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1723510808328-3700c6cb9e7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJ1bm5pbmclMjBldmVudHN8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;

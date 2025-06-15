import React, { use, useState } from "react";
import { AuthContext } from "../assets/AuthProvider/AuthProvider";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "react-router";
import toast from "react-hot-toast";

const MarathonForm = () => {
  const { user } = use(AuthContext);
  console.log("this is user", user);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleAddForm = e =>{
    e.preventDefault()
    const form = e.target ;
    const formData = new FormData(form)
    const marathonData = Object.fromEntries(formData.entries())
    console.log(marathonData);

    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        'content-type' :'application/json'
      },
      body: JSON.stringify(marathonData)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.insertedId) {
        toast.success('Event Added Successfully')
        form.reset()
      }
    })

  }
  return (
    <div>
      <form onSubmit={handleAddForm} className="max-w-5xl mx-auto my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-lg">Marathon Title </label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Example: Name of The Marathon"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-lg">Start Registration Date</label>
           <input type="date" 
           name='startDate'
           />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-lg">End Registration Date</label>
          <input type="date" name="endDate" id="" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-lg">Marathon Start Date </label>
           <input type="date" name="marathonStartDate" id="" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-lg">Location </label>
            <input
              type="text"
              name="location"
              className="w-full input"
              placeholder="Enter Location"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label >Running Distance</label>
            <select className="select validator" name="distance" required>
              <option disabled select value="">
                Choose Options
              </option>
              <option>25k</option>
              <option>10k</option>
              <option>3k</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-lg">Description </label>
            <input
              type="text"
              name="description"
              className="w-full input"
              placeholder="Enter Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-lg"> Marathon Image </label>
            <input
              type="text"
              name="marathonImage"
              className="w-full input"
              placeholder="Add Marathon Image"
              list="browsers"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-lg"> Created At </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              maxDate={addDays(new Date(), 0)}
              name="createdDate"
              placeholderText="Select a date between today and 5 days in the future"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box hidden  border p-4">
            <label className="label text-lg">User Email </label>
            <input
              type="email"
              name="email"
              className="w-full input"
              defaultValue={user?.email}
              readOnly
              placeholder="Enter Your Your User Email"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 hidden rounded-box  border p-4">
            <label className="label text-lg">User Name</label>
            <input
              type="text"
              name="name"
              className="w-full input"
              placeholder="Your User Name"
              defaultValue={user?.displayName}
              readOnly
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn w-full mt-5"
          value="Add Marathon Events"
        />
      </form>
    </div>
  );
};

export default MarathonForm;

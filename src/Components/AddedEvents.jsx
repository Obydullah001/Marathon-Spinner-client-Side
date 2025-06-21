import React, { use, useState } from "react";
import { MdDelete, MdOutlineTipsAndUpdates } from "react-icons/md";
import { data, Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../assets/AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { GrUpdate } from "react-icons/gr";

const AddedEvents = ({ myEvent ,events , setEvents }) => {

    // date picker 

      const [startDate, setStartDate] = useState(new Date());
      const [selectedDate, setSelectedDate] = useState(new Date());
      const [endDate, setEndDate] = useState(null);
      const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      };
    


  console.log(myEvent);
  const {user}= use(AuthContext)
  const { title, description, location, distance, _id } = myEvent;

//   update in Modal 
  const [open , setOpen] =useState(false);
  const handleUpdate =(id)=>{
    setOpen(true);
    console.log(id);
    
  }


  const handleUpdateForm =e =>{
    e.preventDefault()
    const form = e.target ;
    const formData = new FormData(form)
    const updatedData = Object.fromEntries(formData.entries())
    console.log(updatedData);
    fetch(`https://marathon-spinner-server.vercel.app/events/${_id}`,{
         method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        
        if (data.modifiedCount>0) {
            // const updatingEvent = events.filter(originalEvent => originalEvent.id == _id);
            // setEvents(myEvent)
             Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Event Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.reload()
        }
        
    })
    
  }

  const handleDeleteItem = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        console.log(result.isConfirmed);
        
      if (result.isConfirmed) {
        fetch(`https://marathon-spinner-server.vercel.app/events/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                const remaining = events?.filter(singleEvent => singleEvent._id !== _id)
                Swal.fire({
          title: "Deleted!",
          text: "Your Event has been deleted.",
          icon: "success",
        });
        setEvents(remaining)
            }
            
        })
        
      }
    });
  };

  return (
    <>
      <tr className=" my-16 border-2 border-blue-400 ">
        <td className="pl-4 py-6 ">{title}</td>
        <td>{description}</td>
        <td className="text-fuchsia-700 font-semibold">{location}</td>
        <td className="p-1 font-semibold text-amber-500 ">{distance}</td>
        <td><div >{/* Open the modal using document.getElementById('ID').showModal() method */}
    <button onClick={()=>{handleUpdate(_id)}}><GrUpdate /> </button>
<dialog id="my_modal_1" open={open} className="modal">
  <div className="modal-box">
    <div>
          <form onSubmit={handleUpdateForm} className="max-w-5xl mx-auto my-12">
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
              value="Update Marathon Events"
            />
          </form>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></div> </td>
        <td>
          <button onClick={() => handleDeleteItem(_id)}>
            <MdDelete size={30} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default AddedEvents;

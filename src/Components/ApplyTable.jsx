import React, { use, useState } from 'react';
import { MdDelete, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { Link } from 'react-router';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ApplyTable = ({register}) => {

    const {user}= use(AuthContext);


    const handleUpdateRegisterForm =e =>{
       e.preventDefault()
       const form = e.target ;
       const formData = new FormData(form)
       const updatedData = Object.fromEntries(formData.entries())
       console.log(updatedData);
       fetch(`http://localhost:3000/registered/${register._id}`,{
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
                Swal.fire({
               position: "center",
               icon: "success",
               title: "Your Event Updated Successfully",
               showConfirmButton: false,
               timer: 1500,
             });
             
           }
           
       })
       
     }

     const handleDeleteRegistration =(id)=>{
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
                fetch(`http://localhost:3000/registered/${register._id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // const remaining = events?.filter(singleEvent => singleEvent._id !== _id)
                        Swal.fire({
                  title: "Deleted!",
                  text: "Your Event has been deleted.",
                  icon: "success",
                });
                // setEvents(remaining)
                    }
                    
                })
                
              }
            });
        
     }


    const [open , setOpen] =useState(false);
      const handleUpdate =(id)=>{
        setOpen(true);
        console.log(id);
        
      }

      


    return (
        <>
         <tr className=' my-16 border-2 border-blue-400 '>
                <td className='pl-4 py-6 '>{register.title}</td>
                <td className='text-fuchsia-700 font-semibold'>{register.firstName}</td>
                <td className='p-1 font-semibold text-amber-500 '>{register.location}</td>
                <td>{register.contact}</td>
                 <td><div >{/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button onClick={()=>{handleUpdate(register._id)}}><MdOutlineTipsAndUpdates size={25} /> </button>
                <dialog id="my_modal_1" open={open} className="modal">
                  <div className="modal-box">
                    <div>
                          <form onSubmit={handleUpdateRegisterForm} className="max-w-5xl mx-auto my-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label text-lg">Marathon Title</label>
        <input
          type="text"
          defaultValue={register.title}
          readOnly
          name="title"
          className="input w-full"
          placeholder="Example: Name of The Marathon"
        />
      </fieldset>
      {/* <fieldset className="fieldset bg-base-200 border-base-300 hidden rounded-box border p-4">
        <label className="label text-lg">registeredId</label>
        <input
          type="text"
          name="registeredId"
          className="w-full input"
          defaultValue={registeredId}
          readOnly
          placeholder="registeredId"
        />
      </fieldset> */}

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label text-lg">Marathon Start Date</label>
        <input
          type="date"
          name="marathonStartDate"
          defaultValue={register.marathonStartDate}
          readOnly
        />
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label text-lg">First Name</label>
        <input
          type="text"
          name="firstName"
          className="w-full input"
          placeholder="Enter Your First Name"
        />
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label text-lg">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="w-full input"
          placeholder="Enter Your Last Name"
        />
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label text-lg">Contact Number</label>
        <input
          type="text"
          name="contact"
          className="w-full input"
          placeholder="Your Contact"
        />
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label text-lg">Additional Info</label>
        <input
          type="text"
          name="additionalInfo"
          className="w-full input"
          placeholder="Other Additional Information"
        />
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border hidden p-4">
        <label className="label text-lg">User Email</label>
        <input
          type="email"
          name="email"
          className="w-full input"
          defaultValue={user?.email}
          readOnly
          placeholder="Your Email"
        />
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 hidden rounded-box border p-4">
        <label className="label text-lg">User Name</label>
        <input
          type="text"
          name="name"
          className="w-full input"
          defaultValue={user?.displayName}
          readOnly
          placeholder="Your User Name"
        />
      </fieldset>
    </div>

    <input
      type="submit"
      className="btn w-full mt-5"
      value="Update Your Info for Marathon"
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
                <td><button onClick={()=>handleDeleteRegistration(register._id)}><MdDelete size={30}/></button></td>
              </tr>   
        </>
    );
};

export default ApplyTable;
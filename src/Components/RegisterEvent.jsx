import React, { use } from 'react';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';
import { useLoaderData, useParams } from 'react-router';
import toast from 'react-hot-toast';

const RegisterEvent = () => {
    const {user}= use(AuthContext);
    const {id: registeredId} = useParams();
    console.log(registeredId);
    
    const registerEvents = useLoaderData();
    console.log(registerEvents);
    const {
            title ,
            marathonStartDate ,
    } = registerEvents ;


    const handleRegisterForm = e =>{
        e.preventDefault();
         const form = e.target ;
        const formData = new FormData(form)
        const registeredData = Object.fromEntries(formData.entries())
        console.log(registeredData);
        fetch('http://localhost:3000/registered',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(registeredData)
        })
        .then(res=> res.json())
        .then(data => {
            if (data.insertedId) {
           fetch(`http://localhost:3000/events/${registeredData.eventId}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ increment: 1 }), // Backend should handle increment logic
      });
        toast.success('Registered Event Successfully')
        form.reset()
      }
        })
    }

    return (
       <div>
  <form onSubmit={handleRegisterForm} className="max-w-5xl mx-auto my-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label text-lg">Marathon Title</label>
        <input
          type="text"
          defaultValue={title}
          readOnly
          name="title"
          className="input w-full"
          placeholder="Example: Name of The Marathon"
        />
      </fieldset>
      <fieldset className="fieldset bg-base-200 border-base-300 hidden rounded-box border p-4">
        <label className="label text-lg">registeredId</label>
        <input
          type="text"
          name="registeredId"
          className="w-full input"
          defaultValue={registeredId}
          readOnly
          placeholder="registeredId"
        />
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label text-lg">Marathon Start Date</label>
        <input
          type="date"
          name="marathonStartDate"
          defaultValue={marathonStartDate}
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

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label text-lg">User Email</label>
        <input
          type="email"
          name="applicant"
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
      value="Register for Marathon"
    />
  </form>
</div>

    );
};

export default RegisterEvent;
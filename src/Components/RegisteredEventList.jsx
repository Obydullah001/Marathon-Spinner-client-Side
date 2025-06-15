import React, { use, useEffect, useState } from 'react';
import ApplyTable from './ApplyTable';

const RegisteredEventList = ({myRegisteredPromise}) => {

    const registration = use(myRegisteredPromise);
    console.log(registration);
    
    // const [registrationData , setRegistrationData]= useState();

// console.log(registrationData);

//   useEffect(()=>{
//     fetch('http://localhost:3000/registered')
//     .then(res=> res.json())
//     .then(data => {
//     setRegistrationData(data);
//     })
//   },[])
    
    return (
        <div className='mb-16'>
        <h1 className='text-center font-serif text-3xl p-1.5 text-emerald-700'> See Your List What you  Personally have Added {registration.length} </h1>
        <p className=' font-sans text-center pb-9 text-lg'>Your Added List Has been given Here  </p>
         <div className='overflow-x-auto '>
            <table className='w-10/12 mx-auto border ' >
            <thead className='text-left font-bold border-2 border-blue-800 shadow-2xs '>
              <td className='pl-5 py-5'>Title</td>
              <td>Your Name</td>
              <td>Location</td>
              <td>Contact</td>
              <td>Update </td>
              <td>Delete</td>
            </thead>
            <tbody className=''>
           {
            registration.map(register=> <ApplyTable 
            key={registration._id}
            register={register}
            ></ApplyTable>)
           }
            </tbody>
            </table>
         </div>
       </div>
    );
};

export default RegisteredEventList;
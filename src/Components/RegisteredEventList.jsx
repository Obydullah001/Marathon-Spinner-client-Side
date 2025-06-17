import React, { use, useEffect, useState } from 'react';
import ApplyTable from './ApplyTable';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';

const RegisteredEventList = () => {

    // const registration = use(myRegisteredPromise);
    // console.log(registration);
    const {user}= use(AuthContext)
    
    const [registration , setRegistration]= useState([]);
     const [searchTerm, setSearchTerm] = useState('');

    const [ refetch , setRefetch] =useState(true)
// console.log(registrationData);

  useEffect(()=>{
    if (user?.email) {
      
    fetch(`http://localhost:3000/registered?applicant=${user.email}`)
    .then(res=> res.json())
    .then(data => {
    setRegistration(data);
    })
    }
  },[user , refetch]);

    const filteredRegistrations = registration.filter((reg) =>
    reg.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  
    
    return (
        <div className='mb-16'>
        <h1 className='text-center font-serif text-3xl p-1.5 text-emerald-700'> See Your List What you  Personally have Added {registration.length} </h1>
        <p className=' font-sans text-center pb-9 text-lg'>Your Added List Has been given Here  </p>
        <div className='text-center mb-4'>
        <input
          type='text'
          className='input input-bordered w-1/2'
          placeholder='Search by Marathon Title...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


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
            filteredRegistrations.map(register=> <ApplyTable 
            key={register._id}
            register={register}
            registration ={registration}
            setRegistration={setRegistration}
            refetch={refetch}
            setRefetch={setRefetch}
            ></ApplyTable>)
           }
            </tbody>
            </table>
         </div>
       </div>
    );
};

export default RegisteredEventList;
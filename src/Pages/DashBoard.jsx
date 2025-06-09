import React, { useState } from 'react';
import MarathonForm from '../Components/MarathonForm';
import { Link } from 'react-router';
import MyMarathon from '../Components/Mymarathon';
import MyApply from '../Components/MyApply';

const DashBoard = () => {
    const [display , setDisplay]= useState([]);
    const handleMarathon =()=>{
        const marathonForm = <MarathonForm></MarathonForm>
        if (handleMarathon) {
            setDisplay(marathonForm)
        }
    }
    const handleList =()=>{
        const myMarathon =<MyMarathon></MyMarathon>
        if (handleList) {
            setDisplay(myMarathon)
        }
    }
    const handleApply=()=>{
        const myApply = <MyApply></MyApply>
        if (handleApply) {
            setDisplay(myApply)
        }
    }
    return (
        <div className='mx-auto w-11/12 flex '>
            {/* Content Links */}
            <div className='gap-3 w-[30%] mt-16 '>
               <button onClick={handleMarathon}><Link  className='btn'>Add marathon</Link></button> <br />
                <button onClick={handleList}><Link className='btn'>My Marathon List</Link> </button><br />
                <button onClick={handleApply}><Link className='btn'>My Apply List</Link></button> <br />
                
            </div>
            {/* Contents pages */}
            <div className='w-[60%]'>
               {display}
            </div>
        </div>
    );
};

export default DashBoard;
import React, { Suspense, use } from 'react';
import RegisteredEventList from './RegisteredEventList';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';



const MyApply = () => {
  const {user} = use(AuthContext)
  console.log(user);
  
  
  
  
  return (
    <div>
     <Suspense fallback={'loading registered Events'}>
       <RegisteredEventList>

       </RegisteredEventList>
     </Suspense>
    </div>
  );
};

export default MyApply;
import React, { Suspense } from 'react';
import RegisteredEventList from './RegisteredEventList';
import { myRegisteredPromise } from './api/registeredApi';

const MyApply = () => {
  return (
    <div>
     <Suspense fallback={'loading registered Events'}>
       <RegisteredEventList myRegisteredPromise={myRegisteredPromise(UserActivation.email)}>

       </RegisteredEventList>
     </Suspense>
    </div>
  );
};

export default MyApply;
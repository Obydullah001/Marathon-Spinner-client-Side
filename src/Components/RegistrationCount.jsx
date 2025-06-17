import React from 'react';
import { useLoaderData } from 'react-router';

const RegistrationCount = () => {
  const counter = useLoaderData(); // Assuming this is an array of registrations

  return (
    <div>
      <p>Total Registrations: {counter.length}</p>
    </div>
  );
};

export default RegistrationCount;
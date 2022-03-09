import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const { message } = useSelector((state) => state.greeting);
  console.log(message);
  return (
    <>
      <h1>
        { message }
      </h1>
    </>
  );
};

export default Greeting;

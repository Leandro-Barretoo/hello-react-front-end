import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGreetingData } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingsList = useSelector((state) => state.greetingReducer);

  const getGreetings = () => (dispatch) => {
    fetch('https://vast-eyrie-02868.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => data.greetings.forEach((greeting) => {
        dispatch(addGreetingData(greeting));
      }));
  };

  useEffect(() => {
    if (!greetingsList.length) {
      dispatch(getGreetings());
    }
  }, []);

  const myGreetings = greetingsList.map((greeting) => (
    <div key={greeting.message}>
      <h1>{greeting.message}</h1>
    </div>
  ));

  return (
    <>
      { myGreetings }
    </>
  );
};

export default Greeting;

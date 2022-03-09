import { useSelector } from 'react-redux';

const Greeting = () => {
  const greetingsList = useSelector((state) => state.greetingReducer);

  const myGreeting = greetingsList.map((greeting) => (
    <h1 key={greeting.id}>{greeting.message}</h1>
  ));

  return (
    <>
      { myGreeting }
    </>
  );
};

export default Greeting;

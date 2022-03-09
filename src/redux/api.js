const getGreeting = async () => {
  const response = await fetch('https://vast-eyrie-02868.herokuapp.com/');

  return response.json();
};

export default getGreeting;

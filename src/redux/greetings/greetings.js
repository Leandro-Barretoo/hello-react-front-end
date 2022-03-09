import getGreeting from '../api';

const ADD_GREETING = 'helloReactFrontEnd/greetings/ADD_GREETING';

export const addGreetingData = (payload) => ({
  type: ADD_GREETING,
  payload,
});

export const getMessage = () => async (dispatch) => {
  const data = await getGreeting();
  dispatch(addGreetingData(data));
};

const initialState = {
  greeting: null,
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;

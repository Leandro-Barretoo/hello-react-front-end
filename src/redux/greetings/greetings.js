const ADD_GREETING = 'helloReactFrontEnd/greetings/ADD_GREETING';

const initialState = [];

export const addGreetingData = (payload) => ({
  type: ADD_GREETING,
  payload,
});

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GREETING:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default greetingReducer;

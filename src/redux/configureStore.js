import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer, { addGreetingData } from './greetings/greetings';

const rootReducer = combineReducers({
  greetingReducer,
});

const getGreetingData = () => (dispatch) => {
  fetch('https://vast-eyrie-02868.herokuapp.com/')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((data) => data.greetings.forEach((greeting) => {
      dispatch(addGreetingData(greeting));
    }));
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

store.dispatch(getGreetingData());

export default store;

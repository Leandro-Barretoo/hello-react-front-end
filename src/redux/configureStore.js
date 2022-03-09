import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/greetings';

const rootReducer = combineReducers({
  greetingReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

window.store = store;

export default store;

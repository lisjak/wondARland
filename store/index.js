import { createStore } from 'redux';
import { combineReducers } from 'redux-loop';
import objects from './objectsReducer';
import game from './gameReducer';

const rootReducer = combineReducers({
  objects,
  game,
});

const store = createStore(rootReducer);

export default store;

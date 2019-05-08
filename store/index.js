import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import objects from './objectsReducer';
import game from './gameReducer';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
  objects,
  game,
});

const store = createStore(rootReducer, middleware);

export default store;

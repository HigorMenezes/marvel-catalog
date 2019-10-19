import { combineReducers } from 'redux';

import characters from './characters/reducer';

const reducers = combineReducers({
  characters,
});

export default reducers;

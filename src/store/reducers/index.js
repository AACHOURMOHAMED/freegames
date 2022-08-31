import { combineReducers } from '@reduxjs/toolkit';
import games from './games_reducer';

const rootReducer = combineReducers({
  games,
});

export default rootReducer;

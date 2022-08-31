import types from '../types';

const initialState = [];

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${types.GET_GAMES}/fulfilled`:
      return action.payload;
    case `${types.GET_GAMESBYID}/fulfilled`:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default gameReducer;

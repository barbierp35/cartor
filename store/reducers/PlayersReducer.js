import { combineReducers } from 'redux';

const INITIAL_STATE = {
  players: []
};

const playersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DUMP_PLAYERS':
      newState = {...state}

      newState.players = [];

      return newState;

    case 'ADD_PLAYER':
      newState = {...state}

      newState.players.push(action.payload)

      return newState;

    default:
      return state
  }
};

export default combineReducers({
    players: playersReducer
});
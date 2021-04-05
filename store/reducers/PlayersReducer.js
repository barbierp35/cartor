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

      if (action.payload.length) {
        newState.players.push(action.payload)
      }

      return newState;

    default:
      return state
  }
};

export default playersReducer;
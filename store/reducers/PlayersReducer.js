const INITIAL_STATE = {
  players: [],
  currentPlayer: null
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
      
    case 'DELETE_PLAYER':
        newState = {...state}
  
        newState.players = newState.players.filter(item => item !== action.payload)
  
        return newState;

    case 'NEXT_PLAYER':
      newState = {...state}
    
      if (newState.currentPlayer === null) {
        newState.currentPlayer = newState.players[0]

        return newState;
      }
      
      if (newState.players[newState.players.indexOf(newState.currentPlayer) + 1] !== undefined) {
        newState.currentPlayer = newState.players[newState.players.indexOf(newState.currentPlayer) + 1]

        return newState;
      }

      newState.currentPlayer = newState.players[0]

      return newState;

    case 'RESET_PLAYER':
      newState = {...state}

      newState.currentPlayer = null

      return newState;
      
    default:
      return state
  }
};

export default playersReducer;
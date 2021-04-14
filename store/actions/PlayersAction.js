export const dumpPlayers = () => (
  {
    type: 'DUMP_PLAYERS'
  }
);

export const addPlayer = playerName => (
  {
    type: 'ADD_PLAYER',
    payload: playerName
  }
);

export const deletePlayer = playerName => (
  {
    type: 'DELETE_PLAYER',
    payload: playerName
  }
);

export const nextPlayer = () => (
  {
    type: 'NEXT_PLAYER'
  }
);

export const resetPlayer = () => (
  {
    type: 'RESET_PLAYER'
  }
);
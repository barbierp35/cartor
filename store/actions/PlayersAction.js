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
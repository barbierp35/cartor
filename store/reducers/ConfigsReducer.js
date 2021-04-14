const INITIAL_STATE = {
  sound: false
};

const configsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EDIT_CONFIG':
      newState = {...state}
      
      newState[action.payload['key']] = action.payload['value'];

      return newState;

    default:
      return state
  }
};

export default configsReducer;
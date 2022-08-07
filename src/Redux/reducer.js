const initialState = {
  item: {},
};

export const reducer = (state = initialState, action) => {
  console.log('action -> ', action);
  console.log('state -> ', state);
  switch (action.type) {
    case 'SELECT_MOVIE':
      return {
        ...state,
        item: action.item
      };
    default:
      return state;
  }
};



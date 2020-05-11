const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LIGHT_THEME':
      return {
        ...state,
        theme: 'ligth',
      };
    case 'SET_DARK_THEME':
      return {
        ...state,
        theme: 'dark',
      };
    default:
      throw new Error('unknown action type');
  }
};

export default reducer;

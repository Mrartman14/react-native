const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.value,
      };
    case 'SET_AGE':
      return {
        ...state,
        age: action.value,
      };
    default:
      throw new Error('unknown action type');
  }
};

export default reducer;

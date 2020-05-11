import {useContext} from 'react';

/*
  чтобы не писать везде useContext
*/

const useStore = store => {
  const {state, dispatch} = useContext(store);
  return {state, dispatch};
};

export default useStore;

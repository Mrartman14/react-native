import React, {createContext, useReducer} from 'react';

import user from './store';
import reducer from './reducer';

const SettingsContext = createContext(user); //мб сюда и не надо пихать user

function UserStoreProvider({children}) {
  const {state, dispatch} = useReducer(reducer, user);

  return (
    <SettingsContext.Provider value={{state, dispatch}}>
      {children}
    </SettingsContext.Provider>
  );
}

export default UserStoreProvider;

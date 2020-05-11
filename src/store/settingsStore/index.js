import React, {createContext, useReducer} from 'react';

import settings from './store';
import reducer from './reducer';

const SettingsContext = createContext(settings); //мб сюда и не надо пихать settings

function SettingsStoreProvider({children}) {
  const {state, dispatch} = useReducer(reducer, settings);
  return (
    <SettingsContext.Provider value={{state, dispatch}}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsStoreProvider;

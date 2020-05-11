import React from 'react';

import Navigation from 'navigation';
import {SettingsStoreProvider} from 'store';

function App() {
  return (
    <SettingsStoreProvider>
      <Navigation />
    </SettingsStoreProvider>
  );
}

export default App;

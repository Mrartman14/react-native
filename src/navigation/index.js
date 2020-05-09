import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainDrawer} from './drawers';

const navigation = () => (
  <NavigationContainer>
    <MainDrawer />
  </NavigationContainer>
);

export default navigation;

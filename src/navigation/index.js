import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {BottomTabs} from './tabs';

const navigation = () => (
  <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
);

export default navigation;

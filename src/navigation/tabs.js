import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const topTabs = () => (
  <MaterialTopTabs.Navigator>
    <MaterialTopTabs.Screen name="tab1" component={1} />
    <MaterialTopTabs.Screen name="tab2" component={2} />
    <MaterialTopTabs.Screen name="tab3" component={3} />
  </MaterialTopTabs.Navigator>
);

const bottomTabs = () => (
  <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen name="tab1" component={1} />
    <MaterialBottomTabs.Screen name="tab2" component={2} />
    <MaterialBottomTabs.Screen name="tab3" component={3} />
  </MaterialBottomTabs.Navigator>
);

export {topTabs, bottomTabs};

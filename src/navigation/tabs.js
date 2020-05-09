import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {profileStack, newsStack} from './stacks';
import {Documents, Products, Contacts} from '../screens';
import {
  BottomTabScreenOptions,
  BottomTabBarOptions,
} from '../styles/screenOptions';

/* верхнее меню */
const topTabs = createMaterialTopTabNavigator();
const TopTabs = () => (
  <topTabs.Navigator>
    <topTabs.Screen name="Profile" children={profileStack} />
    <topTabs.Screen name="News" children={newsStack} />
    <topTabs.Screen name="Documents" component={Documents} />
    <topTabs.Screen name="Материалы" component={Products} />
    <topTabs.Screen name="Материалы" component={Contacts} />
  </topTabs.Navigator>
);

/* нижнее меню */
const bottomTabs = createBottomTabNavigator();
const BottomTabs = () => (
  <bottomTabs.Navigator
    screenOptions={BottomTabScreenOptions}
    tabBarOptions={BottomTabBarOptions}>
    <bottomTabs.Screen name="Новости" children={newsStack} />
    <bottomTabs.Screen name="Где купить" component={Contacts} />
    <bottomTabs.Screen name="Витрина" component={Products} />
    <bottomTabs.Screen name="Материалы" component={Documents} />
    <bottomTabs.Screen name="Профиль" children={profileStack} />
  </bottomTabs.Navigator>
);

export {TopTabs, BottomTabs};

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {profileStack, newsStack} from './stacks';
import {Documents} from 'screens';

const Drawer = createDrawerNavigator();

/* боковое меню */
const MainDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Profile" children={profileStack} />
    <Drawer.Screen name="News" children={newsStack} />
    <Drawer.Screen name="Documents" component={Documents} />
  </Drawer.Navigator>
);

export {MainDrawer};

/*
  createDrawerNavigator <Drawer.Navigator> создаёт боковое меню,
  в котором будут отображаться компоненты <Drawer.Screen component={comp_name}>
  Если раплоложить его внутри <NavigationContainer>, то меню можно будет открыть
  в любой момент, поэтому не всегда хорошо располагать его там
*/

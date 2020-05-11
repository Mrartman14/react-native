import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {News, Profile, Privacy, Settings, NewsItem} from 'screens';

const profileStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      mode="modal"
      screenOptions={{
        //сделать стили по-нормальному
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'gray'},
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const newsStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen name="News list" component={News} />
      <Stack.Screen name="News item" component={NewsItem} />
    </Stack.Navigator>
  );
};

export {profileStack, newsStack};

/*
  createStackNavigator создает стак текущей навигации
  <Stack.Navigator
    mode="card || modal"
  >
*/

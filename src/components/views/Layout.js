import React from 'react';
import {View, StyleSheet} from 'react-native';

import Content from './Content';
import Navigation from '../common/Navigation';

const navItems = [
  {
    styles: {},
    text: 'Новости',
    route: {},
  },
  {
    styles: {},
    text: 'Где купить',
    route: {},
  },
  {
    styles: {},
    text: 'Витрина',
    route: {},
  },
  {
    styles: {},
    text: 'Материалы',
    route: {},
  },
  {
    styles: {},
    text: 'Профиль',
    route: {},
  },
];

function Layout() {
  return (
    <View>
      <Content />
      <Navigation navItems={navItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  padding: 1,
});

export default Layout;

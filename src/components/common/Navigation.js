import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import NavItem from './NavItem';

function Navigation({navItems}) {
  return (
    <View style={navStyles.container}>
      {navItems.map(item => (
        <NavItem text={item.text} type={item.type} key={item.text} />
      ))}
    </View>
  );
}

export default Navigation;

const navStyles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: '#999',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function NavItem({text, type}) {
  return (
    <View style={navItemStyles.container}>
      <Text style={navItemStyles.text}>{text}</Text>
    </View>
  );
}

export default NavItem;

const navItemStyles = StyleSheet.create({
  container: {
    padding: 3,
  },
  text: {
    color: '#fff',
  },
});

import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';

function Profile(props) {
  return (
    <View style={styles.container}>
      <Text>PROFILE COMPONENT</Text>
      <View style={styles.avatar} />
      <View style={styles.btnContainer}>
        <Button
          title="Privacy"
          onPress={() => props.navigation.navigate('Privacy')}
          style={styles.btn}
        />
        <Button
          title="Settings"
          onPress={() => props.navigation.navigate('Settings')}
        />
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  btn: {
    color: 'red',
    width: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
  },
  container: {
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
  },
});

import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

function Profile(props) {
  return (
    <View>
      <Text>PROFILE COMPONENT</Text>
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
  );
}

export default Profile;

const styles = StyleSheet.create({
  btn: {
    color: 'red',
  },
});

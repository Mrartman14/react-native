import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

import {RadioGroup} from 'lib/components';

function Settings(props) {
  return (
    <View style={styles.container}>
      <Text>Режим</Text>
      <RadioGroup list={['ночной', 'дневной']} />
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

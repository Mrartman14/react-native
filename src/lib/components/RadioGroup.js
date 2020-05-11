import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function RadioGroup({list}) {
  const [selected, setSelected] = useState(null);

  return list.map((text, index) => {
    return (
      <View style={styles.container} key={index}>
        <Text>{text}</Text>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => setSelected(text)}>
          {text === selected && <View style={styles.selected} />}
        </TouchableOpacity>
      </View>
    );
  });
}

export default RadioGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#794F9B',
  },
});

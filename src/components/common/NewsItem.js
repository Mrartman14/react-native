import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function NewsItem({props}) {
  return (
    <View style={newsItemStyles.container}>
      <View style={newsItemStyles.imageParody}>
        <Text>IMAGE</Text>
      </View>
      {/* <Image style={newsItemStyles.Image} source={props.url} /> */}
      <Text style={newsItemStyles.heading}>{props.heading}</Text>
      <Text style={newsItemStyles.description}>{props.description}</Text>
    </View>
  );
}

export default NewsItem;

const newsItemStyles = StyleSheet.create({
  imageParody: {
    width: 200,
    height: 200,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // image: {
  //   borderWidth: 1,
  // },
  container: {
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
  },
  heading: {
    fontWeight: 'bold',
  },
  description: {
    color: 'red',
  },
});

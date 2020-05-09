import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function NewsItem(props) {
  return (
    <View style={newsItemStyles.container}>
      <Image
        style={newsItemStyles.Image}
        source={{uri: props.route.params.data.uri}}
      />
      <Text style={newsItemStyles.heading}>
        {props.route.params.data.heading}
      </Text>
      <Text style={newsItemStyles.description}>
        {props.route.params.data.description}
      </Text>
    </View>
  );
}

export default NewsItem;

const newsItemStyles = StyleSheet.create({
  image: {
    borderWidth: 1,
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontWeight: 'bold',
  },
  description: {
    color: 'red',
  },
});

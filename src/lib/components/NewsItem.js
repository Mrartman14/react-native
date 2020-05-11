import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function NewsItem(props) {
  return (
    <View style={newsItemStyles.container}>
      <Image style={newsItemStyles.Image} source={{uri: props.data.uri}} />
      <Text
        style={newsItemStyles.heading}
        onPress={() =>
          props.navigation.navigate('News item', {data: props.data})
        }>
        {props.data.heading}
      </Text>
      <Text style={newsItemStyles.description}>{props.data.description}</Text>
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
    borderBottomWidth: 2,
  },
  heading: {
    fontWeight: 'bold',
  },
  description: {
    color: 'red',
  },
});

/*
  <Image>
    resizeMode="contain || cover || stretch || center || repeat"
    source={require('./path')} || {{uri: 'url'}}
*/

import React from 'react';
import {ScrollView} from 'react-native';

import NewsItem from './NewsItem';

function NewsList({list}) {
  const newsList = list.map((item, i) => <NewsItem key={i} props={item} />);
  return <ScrollView>{newsList}</ScrollView>;
}

export default NewsList;

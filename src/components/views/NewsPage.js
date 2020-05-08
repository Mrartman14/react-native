import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import NewsList from '../common/NewsList';

import News from '../../../backend/news';

function NewsPage() {
  const [news, setNews] = useState([]);
  useEffect(() => setNews(News), []);

  return (
    <View>
      <Text>Новости</Text>
      <NewsList list={news} />
    </View>
  );
}

export default NewsPage;

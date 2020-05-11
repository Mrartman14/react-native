import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

import {NewsItem} from 'lib/components';

import newsList from '../../../backend/news';

function News(props) {
  const [news, setNews] = useState([]);
  useEffect(() => setNews(newsList), []);

  return (
    //заменить скролвью на другой компонент
    <ScrollView>
      {news.map((item, i) => (
        <NewsItem key={i} data={item} navigation={props.navigation} />
      ))}
    </ScrollView>
  );
}

export default News;

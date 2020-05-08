import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import NewsPage from './NewsPage';
import DocumentsPage from './DocumentsPage';
import ProfilePage from './ProfilePage';

function Content() {
  return (
    <ScrollView style={styles.content}>
      <NewsPage />
      <ProfilePage />
      <DocumentsPage />
    </ScrollView>
  );
}

export default Content;

const styles = StyleSheet.create({
  content: {
    height: '95%',
  },
});

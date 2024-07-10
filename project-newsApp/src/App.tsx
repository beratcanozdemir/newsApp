import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import NewsCard from './Components/NewsCard';
import newsData from './news_data.json';
import newsBannerData from './news_banner_data.json';
const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sport News</Text>
      <FlatList
        ListHeaderComponent={
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newsBannerData.map(bannerNews => (
              <Image
                style={styles.bannerImage}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        }
        keyExtractor={item => item.id.toString()}
        data={newsData}
        renderItem={renderNews}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 45,
    color: 'black',
  },
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});
export default App;

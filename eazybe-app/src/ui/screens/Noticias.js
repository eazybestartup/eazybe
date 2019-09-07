import React, { Component } from 'react';
import {
  fetchNews
} from '../../state/news/news.actions';
import { TabNavigatorConnect } from '../../navigator/TabNavigator/TabNavigator';
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import ButtonNewPost from '../components/noticias/button-new-post.component'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'
import PostCard from '../components/feed/post-card.component'
import Reactotron from 'reactotron-react-native';

const styles = StyleSheet.create({
  listItem: {
    height: 230,
    width: '100%',
  },
  post: {
    width: '100%',
  },
  flex1: { flex: 1 },
  vwFlatList: { flex: 11, height: '100%' },
  btnNewPost: { position: 'absolute', right: 0, bottom: 40 },
});

class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    headerLeft: null,
    title: 'Notícias'
  }

  componentDidMount() {
    this.props.fetchNews();
  }
  
  renderFooter = () => {
    if (!this.props.news.loading) return null;
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <PostCard 
          postType={item.type_post}
          style={styles.post}
          text={item.text} />
      </View>
    );
  }

  render() {
    const { news, fetchNews } = this.props
    return (
      <View style={styles.flex1}>
        <View style={styles.vwFlatList}>
          <FlatList
            data={news.data}
            renderItem={this.renderItem}
            keyExtractor={item => `${item.id}`}
            onEndReached={() => {
              if(news.loading || news.data.length < 3) return
              fetchNews()
            }}
            onEndReachedThreshold={0.1}
            ListFooterComponent={this.renderFooter}
            extraData={this.props}
          />
        </View>
        <View style={styles.btnNewPost}>
          <ButtonNewPost onPress={() => this.props.navigation.navigate('NewPostConnected')} />
        </View>
      </View>
    )
  }
}

const mapState = ({ newsReducer }) => {
  return {
    news: newsReducer
  }
}
const mapDispatch = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews())
  }
}

export const NoticiasConnected = connect(mapState, mapDispatch)(withNavigation(Noticias))

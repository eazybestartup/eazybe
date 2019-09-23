import React, { Component } from 'react';
import {
  fetchNews
} from '../../state/news/news.actions';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import ButtonNewPost from '../components/noticias/button-new-post.component'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'
import PostCard from '../components/feed/post-card.component'
import FeedHeader from '../components/feed/feed-header.component'
import { Spinner } from 'native-base';

const styles = StyleSheet.create({
  listItem: {
    height: 230,
    width: '100%',
  },
  post: {
    width: '100%',
  },
  flex1: { flex: 1, padding: 20 },
  vwFlatList: { flex: 11, height: '100%' },
  btnNewPost: { position: 'absolute', right: 0, bottom: 40 },
});

class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.refresh = this.refresh.bind(this)
  }

  static navigationOptions = {
    title: 'Notícias',
    header: null,
    headerMode: 'none',
    headerLeft: null,
  }

  componentDidMount() {
    this.props.fetchNews();
  }
  
  renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <PostCard 
          style={styles.post}
          post={item}
          />
      </View>
    );
  }

  refresh = () => {
    const { fetchNews } = this.props
    this.setState({ refreshing: true })
    fetchNews()
    this.setState({ refreshing: false })
  }

  render() {
    const { news, loading, user } = this.props
    const { refreshing } = this.state
    return (
      <View style={styles.flex1}>
        <FeedHeader 
          title={`olá, ${user.full_name}!`}
          titleColor='#EF5B5C'
          phrase={`Descubra o que há de novo em ${user.district.neighborhood}`}
        />
        <View style={styles.vwFlatList}>
          {loading ? <Spinner color='yellow' /> : 
          <FlatList
            data={news.data}
            renderItem={this.renderItem}
            keyExtractor={item => `${item.id}`}
            onRefresh={() => this.refresh()}
            extraData={this.props}
            refreshing={refreshing}
            showsVerticalScrollIndicator={false}
          />}
        </View>
        <View style={styles.btnNewPost}>
          <ButtonNewPost onPress={() => this.props.navigation.navigate('NewPostConnected')} />
        </View>
      </View>
    )
  }
}

const mapState = ({ newsReducer, userReducer }) => {
  return {
    news: newsReducer,
    user: userReducer
  }
}
const mapDispatch = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews())
  }
}

export const NoticiasConnected = connect(mapState, mapDispatch)(withNavigation(Noticias))

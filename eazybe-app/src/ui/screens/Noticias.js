import React, { Component } from 'react';
import {
  newsFeedLoading,
  addPage,
  pushData,
  fetchNews
} from '../../state/news/news.actions';
import { TabNavigatorConnect } from '../../navigator/TabNavigator/TabNavigator';
import { ScrollView, Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import ButtonNewPost from '../components/noticias/ButtonNewPost/ButtonNewPost';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'
//import { TabNavigatorConnect } from '../../navigator/TabNavigator/TabNavigator'
import colors from '../colors/colors.enum'

//const styles = {
  //flex1: { flex: 1, backgroundColor: colors.bgContent },
  //flex10: { flex: 10 }
//}
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
  marginTopFlatList: { marginTop: 30 },
  flex1: { flex: 1 },
  flex10: { flex: 10 },
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
  marginTopFlatList: { marginTop: 30 },
  flex11: { flex: 11, height: '100%' },
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
        <Text>{item.full_name}</Text>
      </View>
    );
  }

  render() {
    //Reactotron.log('data', this.props.news.data)
    return (
      <View style={styles.flex1}>
        <View style={styles.flex11}>
          <FlatList
            style={styles.marginTopFlatList}
            contentContainerStyle={styles.list}
            data={this.props.news.data}
            renderItem={this.renderItem}
            keyExtractor={item => `${item.id}`}
            onEndReached={this.props.fetchNews}
            onEndReachedThreshold={0.1}
            ListFooterComponent={this.renderFooter}
          />
        </View>
        <View style={styles.flex1}>
          <TabNavigatorConnect />
          <View style={styles.btnNewPost}>
            <ButtonNewPost onPress={() => this.props.navigation.navigate('NewPost')} />
          </View>
        </View>
      </View>
    )
  }
}

const mapState = ({ newsReducer }) => {
  //Reactotron.log(newsReducer)
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

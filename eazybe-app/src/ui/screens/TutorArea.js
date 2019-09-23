import React, { Component } from 'react';
import {
  fetchAssaltos
} from '../../state/news/news.actions';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import AssaltoReport from '../components/tutor-area/assalto-report.component'
import FeedHeader from '../components/feed/feed-header.component'

import { Spinner } from 'native-base'

const styles = StyleSheet.create({
  listItem: {
    height: 170,
    width: '100%',
    marginBottom: 100
  },
  post: {
    width: '100%',
  },
  flex1: { flex: 1, padding: 20 },
  vwFlatList: { flex: 11, height: '100%' },
});

class TutorArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.refresh = this.refresh.bind(this)
  }

  componentDidMount() {
    this.props.fetchAssaltos();
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <AssaltoReport 
          style={styles.post}
          post={item}
          />
      </View>
    );
  }

  refresh = () => {
    const { fetchAssaltos } = this.props
    this.setState({ refreshing: true })
    fetchAssaltos()
    this.setState({ refreshing: false })
  }

  render() {
    const { news, loading } = this.props
    const { refreshing } = this.state
    const assaltosLength = news.dataAssalto && news.dataAssalto.length
    return (
      <View style={styles.flex1}>
        {assaltosLength ? <FeedHeader 
          title={`àrea do tutor`}
          titleColor='#679BC8'
          phrase={`Você possui ${assaltosLength} ${assaltosLength > 1 ? 'novas notificações' : 'nova notificação' } de perigo`}
        /> : null}
        <View style={styles.vwFlatList}>
          {loading ? <Spinner color='yellow' /> : 
          <FlatList
            data={news.dataAssalto}
            renderItem={this.renderItem}
            keyExtractor={item => `${item.id}`}
            onRefresh={() => this.refresh()}
            extraData={this.props}
            refreshing={refreshing}
            showsVerticalScrollIndicator={false}
          />}
        </View>
      </View>
    );
  }
}

const mapState = ({ newsReducer }) => {
  return {
    news: newsReducer
  }
}
const mapDispatch = dispatch => {
  return {
    fetchAssaltos: () => dispatch(fetchAssaltos())
  }
}

export const TutorAreaConnected = connect(mapState, mapDispatch)(TutorArea)
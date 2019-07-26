import {
  NEWS_FEED_LOADING,
  ADD_PAGE,
  PUSH_DATA,
  FETCH_NEWS
} from './news.actionTypes';

const newsFeedLoading = (loading) => {
  return {
    type: NEWS_FEED_LOADING,
    loading
  };
};

const addPage = () => {
  return {
    type: ADD_PAGE
  };
};

const pushData = (data) => {
  return {
    type: PUSH_DATA,
    payload: data
  }
}

const fetchNews = () => {
  return {
    type: FETCH_NEWS,
  }
}

export {
  newsFeedLoading,
  addPage,
  pushData,
  fetchNews
};

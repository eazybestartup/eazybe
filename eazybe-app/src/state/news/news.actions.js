import {
  NEWS_FEED_LOADING,
  NEWS_ASSALTO_LOADING,
  ADD_PAGE,
  PUSH_DATA,
  FETCH_NEWS,
  FETCH_ASSALTOS,
  RESET_FEED,
  SET_ASSALTOS
} from './news.actionTypes';

const newsFeedLoading = (loading) => {
  return {
    type: NEWS_FEED_LOADING,
    loading
  };
};

const newsAssaltoLoading = (loading) => {
  return {
    type: NEWS_ASSALTO_LOADING,
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

const setAssaltos = (data) => {
  return {
    type: SET_ASSALTOS,
    payload: data
  }
}

const fetchNews = () => {
  return {
    type: FETCH_NEWS,
  }
}

const fetchAssaltos = () => {
  return {
    type: FETCH_ASSALTOS,
  }
}

const resetFeed = () => {
  return {
    type: RESET_FEED
  }
}

export {
  newsFeedLoading,
  newsAssaltoLoading,
  NEWS_FEED_LOADING,
  NEWS_ASSALTO_LOADING,
  RESET_FEED,
  FETCH_ASSALTOS,
  setAssaltos,
  addPage,
  pushData,
  fetchNews,
  fetchAssaltos,
  resetFeed,
};

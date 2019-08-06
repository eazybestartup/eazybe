import { takeLatest, select, call, put } from 'redux-saga/effects';
import {
  newsFeedLoading,
  addPage,
  pushData,
  fetchNews
} from './news.actions';

import {
  NEWS_FEED_LOADING,
  ADD_PAGE,
  PUSH_DATA,
  FETCH_NEWS
} from './news.actionTypes';

import Reactotron from 'reactotron-react-native';

const baseURL = 'https://api.github.com';
const searchTerm = 'react';
const perPage = 20;

function* getPosts(page) {
  const response = yield fetch(`${baseURL}/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`);
  return yield response.json();
}

export function* _fetchNews() {
  // get Reducer
  const { newsReducer } = yield select();
  //destructuring assignment on Reducer
  const { loading, page } = newsReducer;

  if (loading) {
    return;
  }

  yield put(newsFeedLoading(true));
  const posts = yield call(getPosts, page);
  Reactotron.log(Array.isArray(posts.items))
  yield put(pushData(posts.items));
  yield put(addPage());
  yield put(newsFeedLoading(false));
}

export function* newsSaga() {
  yield takeLatest(FETCH_NEWS, _fetchNews);
}

import { takeLatest, select, call, put, fork, delay } from 'redux-saga/effects';
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
import NoticiasService from '../../services/noticias/noticias.service'
import { GlobalAlert } from '../../ui/components/common/global-alert.component'
import Reactotron from 'reactotron-react-native';

const noticiasService = new NoticiasService()

// const baseURL = 'https://api.github.com';
// const searchTerm = 'react';
// const perPage = 20;

// function* getPosts(page) {
//   const response = yield fetch(`${baseURL}/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`);
//   return yield response.json();
// }

function getUserFeed(districtId) {
  return noticiasService
    .getFeed(districtId)
    .then(res => ({ res }))
    .catch(err => ({ err }))
}

export function* _fetchNews() {
  // get Reducer
  const { userReducer, newsReducer } = yield select();
  //destructuring assignment on Reducer
  const { loading, page } = newsReducer;

  if (loading) {
    return;
  }

  yield put(newsFeedLoading(true));
  if(!userReducer.district) {
    return
  }

  yield delay(1000)
  const { err, res } = yield call(getUserFeed, userReducer.district.id);
  if (err) {
    return GlobalAlert.errorMessage('Erro!', 'Erro ao recuperar as notícias do bairro, tente novamente!')
  }

  if(res.data) {
    yield put(pushData(res.data.post)); 
    return yield put(newsFeedLoading(false));
  }
  //yield put(addPage());
}

export function* newsSaga() {
  yield takeLatest(FETCH_NEWS, _fetchNews);
}

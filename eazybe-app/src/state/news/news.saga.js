import { takeLatest, select, call, put, fork, delay, all } from 'redux-saga/effects';
import {
  newsFeedLoading,
  newsAssaltoLoading,
  addPage,
  pushData,
  setAssaltos,
  fetchNews,
} from './news.actions';

import {
  NEWS_FEED_LOADING,
  ADD_PAGE,
  PUSH_DATA,
  FETCH_NEWS,
  FETCH_ASSALTOS,
  SET_ASSALTOS
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

  try {
    const { userReducer, newsReducer } = yield select();
    const { loading, page } = newsReducer;
  
    if (loading) {
      return;
    }
  
    if(!userReducer.district) {
      return
    }
    yield put(newsFeedLoading(true));
    yield delay(1000)
    const { err, res } = yield call(getUserFeed, userReducer.district.id);
    
    if (err) {
      return GlobalAlert.errorMessage('Erro!', 'Erro ao recuperar as notícias do bairro, tente novamente!')
    }
  
    if(res.data) {
      yield put(pushData(res.data.post)); 
    }
  } catch(e) {
    Reactotron.log('houve um erro', e)
    GlobalAlert.errorMessage('Ops!', 'Ocorreu um erro desconhecido o feed do bairro!')
  } finally {
    return yield put(newsFeedLoading(false));
  }
}

export function* _fetchAssaltos() { 
 try {
  const { userReducer, newsReducer } = yield select();
  const { loading } = newsReducer;

  if (loading) {
    return;
  }

  if(!userReducer.district) {
    return
  }
  yield put(newsAssaltoLoading(true))
  yield delay(1000)
  const { err, res } = yield call(getUserFeed, userReducer.district.id);

  if (err) {
    return GlobalAlert.errorMessage('Erro!', 'Erro ao os assaltos do bairro, tente novamente!')
  }

  if(res.data) {
    Reactotron.log('111')
    yield put(setAssaltos(res.data.post))
    Reactotron.log('222')
  }
 } catch(e) {
    Reactotron.log('houve um erro', e)
    GlobalAlert.errorMessage('Ops!', 'Ocorreu um erro desconhecido ao trazer os assaltos!')
 } finally {
    yield put(newsAssaltoLoading(false))
 }
}

export function* newsSaga() {
  yield all([
    takeLatest(FETCH_NEWS, _fetchNews),
    takeLatest(FETCH_ASSALTOS, _fetchAssaltos)
  ]);
}

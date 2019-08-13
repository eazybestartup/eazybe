import { takeLatest, select, call, put, all } from 'redux-saga/effects';
import {
  setUserAddress,
  setErrorMessage,
  setLoading,
  setInvalidCep
} from './register.actions';
import UserAddress from '../../models/UserAddress'
import User from '../../models/User'

import {
  FETCH_CEP_VIA_CEP,
  REGISTER_USER
} from './register.actionTypes';

import RegisterService from '../../services/register/register.service'
import getText from '../../enums/dictionary/dictionary';
import Reactotron from 'reactotron-react-native';

const registerService = new RegisterService();

function _fetchDataFromViaCep(cep) {
  return registerService
    .getDataFromViaCep(cep)
    .then(res => ({ res }))
    .catch(err => ({ err }))
}

function registerUser(normalizedUser) {
  return registerService
    .createUser(normalizedUser)
    .then(res => ({ res }))
    .catch(err => ({ err }))
}

function* _fetchCep({ cep }) {
  yield put(setLoading(true));
  try {
    const { res, err } = yield call(_fetchDataFromViaCep, cep);
    const { registerReducer } = yield select();
    if (res.data.erro) {
      yield put(setLoading(false));
      yield put(setInvalidCep(true));
      return yield put(setErrorMessage(getText('register:label:invalid-cep')));
    }
    const userAddress = new UserAddress(
      res.data.cep.replace('-', ''),
      res.data.logradouro,
      registerReducer.userAddress.number, 
      res.data.bairro,
      registerReducer.userAddress.complement,
      res.data.localidade,
      res.data.uf,
    );
    yield put(setUserAddress(userAddress));
    yield put(setInvalidCep(false));
    yield put(setErrorMessage(''));
    yield put(setLoading(false));
  } catch(e) {
    yield put(setInvalidCep(true));
    yield put(setErrorMessage(getText('register:label:unknown-error')));
    yield put(setLoading(false));
  }
}

export function* _registerUser() {
  yield put(setLoading(true));
  try {
    const { registerReducer } = yield select();
    const normalizedUser = User.normalizeUser(registerReducer);
    const { res, err } = yield call(registerUser, normalizedUser);
    Reactotron.log({ res, err })
  } catch(e) {
    yield put(setErrorMessage(getText('register:label:unknown-error')));
    yield put(setLoading(false));
  } finally {
    yield put(setLoading(false));
  }
}

export function* registerSaga() {
  yield all([
    takeLatest(FETCH_CEP_VIA_CEP, _fetchCep),
    takeLatest(REGISTER_USER, _registerUser)
  ]);
}

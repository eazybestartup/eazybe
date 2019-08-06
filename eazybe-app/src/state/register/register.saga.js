import { takeLatest, select, call, put } from 'redux-saga/effects';
import {
  setUserAddress,
  setErrorMessage,
  setLoading,
  setInvalidCep,
} from './register.actions';
import UserAddress from '../../models/UserAddress'

import {
  FETCH_CEP_VIA_CEP
} from './register.actionTypes';

import RegisterService from '../../services/register/register.service'
import getText from '../../enums/dictionary/dictionary';

const registerService = new RegisterService();

function _fetchDataFromViaCep(cep) {
  return registerService
    .getDataFromViaCep(cep)
    .then(res => ({ res }))
    .catch(err => ({ err }))
}

export function* _fetchCep({ cep }) {
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

export function* registerSaga() {
  yield takeLatest(FETCH_CEP_VIA_CEP, _fetchCep);
}

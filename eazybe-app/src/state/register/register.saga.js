import { takeLatest, select, call, put, all } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation'
import {
  setUserAddress,
  setErrorMessage,
  setLoading,
  setInvalidCep,
} from './register.actions';

import {
  getUserById
} from '../user/user.actions';

import { setUser } from '../user/user.actions'
import UserAddress from '../../models/UserAddress'
import User from '../../models/User'

import {
  FETCH_CEP_VIA_CEP,
  REGISTER_USER,
  AUTHENTICATE
} from './register.actionTypes';

import RegisterService from '../../services/register/register.service'
import getText from '../../enums/dictionary/dictionary';
import Reactotron from 'reactotron-react-native';
import { GlobalAlert } from '../../ui/components/common/global-alert.component'
import StorageService from '../../services/storage/storage.service';
import NavigationService from '../../services/navigation/navigation.service';
import decode from 'jwt-decode';

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

function authenticateUser(user) {
  return registerService
    .authenticateUser(user)
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
    Reactotron.log(normalizedUser)
    const { res, err } = yield call(registerUser, normalizedUser);
    Reactotron.log({ res, err })
    if(res.data.status === 500 || err) {
      yield put(setLoading(false));
      return GlobalAlert.show({
        title: 'Erro!',
        message: 'Usuário já existente!',
        confirmText: 'Ok',
        handleConfirmation: () => {},
      })
    }

    yield put(setUser(res))
    yield NavigationService.navigate('NoticiasConnected');
  } catch(e) {
    Reactotron.log('erro desconhecido', e)
    yield put(setErrorMessage(getText('register:label:unknown-error')));
  } finally {
    yield put(setLoading(false));
  }
}

export function* _auth({ user }) {
  yield put(setLoading(true));
  try {
    const { res, err } = yield call(authenticateUser, user)
    if(err) {
      yield put(setLoading(false));
      return GlobalAlert.show({
        title: 'Credenciais inválidas',
        message: 'Verifique seu e-mail e senha',
        confirmText: 'Ok',
        handleConfirmation: () => {},
      })
    }
  
    if(res.data) {
      yield call(StorageService.set, 'auth_token', res.data.auth_token)
      Reactotron.log(decode)
      const userId = yield decode(res.data.auth_token);
      yield put(getUserById(userId));
      yield put(setLoading(false));
      yield NavigationService.navigate('NoticiasConnected');
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* registerSaga() {
  yield all([
    takeLatest(FETCH_CEP_VIA_CEP, _fetchCep),
    takeLatest(REGISTER_USER, _registerUser),
    takeLatest(AUTHENTICATE, _auth)
  ]);
}

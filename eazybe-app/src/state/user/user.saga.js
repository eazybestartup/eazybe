import { takeLatest, select, call, put, all } from 'redux-saga/effects';
import { GET_USER_BY_ID, setUser } from './user.actions'
import UserService from '../../services/user/user.service';
import Reactotron from 'reactotron-react-native';
import { GlobalAlert } from '../../ui/components/common/global-alert.component'

const userService = new UserService();

function getUserById(userId) {
  return userService
    .getUserById(userId)
    .then(res => ({ res }))
    .catch(err => ({ err }));
}

function* _getUserById(payload) {
  const { res, err } = yield call(getUserById, payload.id.user_id)
  if (res.data) {
    Reactotron.log(res.data)
    yield(put(setUser(res.data)))
    Reactotron.log(yield select())
  }

  if (err) {
    return GlobalAlert.show({
      title: 'Erro!',
      message: 'Houve um erro ao recuperar as informações do usuário',
      confirmText: 'Ok',
      handleConfirmation: () => {},
    })
  }
}

export function* userSaga() {
  yield all([
    takeLatest(GET_USER_BY_ID, _getUserById)
  ]);
}

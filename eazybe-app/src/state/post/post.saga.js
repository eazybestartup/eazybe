import { takeLatest, select, call, put, all } from 'redux-saga/effects';
import { NEW_POST, newPost } from './post.actions'
import PostService from '../../services/post/post.service';
import NavigationService from '../../services/navigation/navigation.service'
import Reactotron from 'reactotron-react-native';
import { GlobalAlert } from '../../ui/components/common/global-alert.component'
import { fetchNews } from '../news/news.actions'
const postService = new PostService();

function publishPost(post) {
  return postService
    .newPost(post)
    .then(res => ({ res }))
    .catch(err => ({ err }))
}

function errorMessage(title, message) {
  return GlobalAlert.show({
    title,
    message,
    confirmText: 'Ok',
    handleConfirmation: () => {},
  })
}

function* _newPost({ post }) {
  const { text, type_post } = post;

  if (!text) {
    return errorMessage('Erro!', 'A publicação não pode ser vazia')
  }

  const { err, res } = yield call(publishPost, { text, type_post });
  Reactotron.log({ err, res })
  if (err) {
    return errorMessage('Erro!', 'Houve um erro, tente novamente mais tarde')
  }
  yield put(fetchNews())
  yield NavigationService.navigate('TabNavigatorConnect');
}

export function* postSaga() {
  yield all([
    takeLatest(NEW_POST, _newPost)
  ]);
}

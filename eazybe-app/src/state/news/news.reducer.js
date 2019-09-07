import {
  NEWS_FEED_LOADING,
  ADD_PAGE,
  PUSH_DATA,
  RESET_FEED
} from './news.actionTypes';
import Reactotron from 'reactotron-react-native'
const INITIAL_STATE = {
  loading: false,
  page: 1,
  data: [],
};

pushOnlyNewContent = (state, content) => {
  const newContent = []
  content.forEach(cont => {
    const postAlreadyFetched = state.data.some(post => post.id === cont.id);
    postAlreadyFetched ? null : newContent.push(cont)
  })
  Reactotron.log({ newContent })
  return newContent;
}

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_FEED_LOADING:
      Reactotron.log('chegou', action.loading)
      return { ...state, loading: action.loading }
    case ADD_PAGE:
      const page = state.page;
      return { ...state, page: page + 1 }
    case PUSH_DATA:
      return { ...state, data: [...state.data, ...pushOnlyNewContent(state, action.payload)] }
    case RESET_FEED:
      return { loading: false, page: 1, data: [] }
    default: 
      return { ...state };
  }
};

export default newsReducer;

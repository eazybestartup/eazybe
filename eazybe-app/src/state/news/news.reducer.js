import {
  NEWS_FEED_LOADING,
  NEWS_ASSALTO_LOADING,
  ADD_PAGE,
  PUSH_DATA,
  SET_ASSALTOS,
  RESET_FEED,
} from './news.actionTypes';
import { POST_TYPES } from '../../enums/news/post-types.enum'
import Reactotron from 'reactotron-react-native'
const INITIAL_STATE = {
  loading: false,
  loadingFeedAssalto: false,
  page: 1,
  data: [],
  dataAssalto: []
};

pushOnlyNewContent = (state, content, field) => {
  const newContent = []
  content.forEach(cont => {
    const postAlreadyFetched = state[field].some(post => post.id === cont.id);
    postAlreadyFetched ? null : newContent.push(cont)
  })
  return newContent.reverse();
}

onlyAssalto = data => {
  return data.filter(post => post.type_post === POST_TYPES.ASSALTO).reverse()
}

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_FEED_LOADING:
      return { ...state, loading: action.loading }
    case NEWS_ASSALTO_LOADING:
      return { ...state, loadingFeedAssalto: action.loading }
    case ADD_PAGE:
      const page = state.page;
      return { ...state, page: page + 1 }
    case PUSH_DATA:
      return { ...state, data: [...state.data, ...pushOnlyNewContent(state, action.payload, 'data')] }
    case RESET_FEED:
      return { loading: false, page: 1, data: [] }
    case SET_ASSALTOS:
      return { ...state, dataAssalto: [...onlyAssalto(action.payload)] }  
    default: 
      return { ...state };
  }
};

export default newsReducer;

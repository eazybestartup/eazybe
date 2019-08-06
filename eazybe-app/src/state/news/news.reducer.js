import {
  NEWS_FEED_LOADING,
  ADD_PAGE,
  PUSH_DATA
} from './news.actionTypes';

const INITIAL_STATE = {
  loading: false,
  page: 1,
  data: [],
};


const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_FEED_LOADING:
      return { ...state, loading: action.loading }
    case ADD_PAGE:
      const page = state.page;
      return { ...state, page: page + 1 }
    case PUSH_DATA: 
      return { ...state, data: [...state.data, ...action.payload] }
    default: 
      return { ...state };
  }
};

export default newsReducer;

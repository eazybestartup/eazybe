import {
  NEW_POST
} from './post.actionTypes';

const newPost = (post) => {
  return {
    type: NEW_POST,
    post
  };
};

export {
  newPost,
  NEW_POST,
};

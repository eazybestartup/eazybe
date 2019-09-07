import { urls } from '../_base/urls';
import axios from 'axios';
import HttpUtils from '../_base/httpUtils';
import Reactotron from 'reactotron-react-native';

class PostService {
  async newPost(post) {
    const header = await HttpUtils.getAuthHeader();
    return axios.post(`${urls.API_PROD}/rede/social/post/create`, post, header);
  }
}

export default PostService;

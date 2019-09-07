import { urls } from '../_base/urls';
import axios from 'axios';
import HttpUtils from '../_base/httpUtils';
import Reactotron from 'reactotron-react-native';

class NoticiasService {
  async getFeed(districtId) {
    const header = await HttpUtils.getAuthHeader();
    return axios.get(`${urls.API_PROD}/rede/social/${districtId}`, header);
  }
}

export default NoticiasService;

// /rede/social/

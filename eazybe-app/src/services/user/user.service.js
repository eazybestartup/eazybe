import { urls } from '../_base/urls';
import axios from 'axios';
import HttpUtils from '../_base/httpUtils';
import Reactotron from 'reactotron-react-native';
class UserService {
  async getUserById(userId) {
    const header = await HttpUtils.getAuthHeader();
    return axios.get(`${urls.API_PROD}/users/${userId}`, header);
  }
}

export default UserService;

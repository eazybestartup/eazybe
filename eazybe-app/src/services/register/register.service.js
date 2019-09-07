import { urls } from '../_base/urls';
import axios from 'axios';

class RegisterService {
  getDataFromViaCep(cepReceived) {
    return axios.get(`${urls.cep}/${cepReceived}/json/`);
  }

  createUser(user) {
    return axios.post(`${urls.API_PROD}/users`, user)
  }

  authenticateUser(user) {
    return axios.post(`${urls.API_PROD}/authenticate`, user)
  }
}

export default RegisterService;

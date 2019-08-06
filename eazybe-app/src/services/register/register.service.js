import { urls } from '../_base/urls';
import axios from 'axios';

class RegisterService {
  getDataFromViaCep(cepReceived) {
    return axios.get(`${urls.cep}/${cepReceived}/json/`);
  }
}

export default RegisterService;

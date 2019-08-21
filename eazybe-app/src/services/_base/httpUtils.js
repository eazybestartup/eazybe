import StorageService from '../storage/storage.service';

class HttpUtils {
  static async getAuthHeader() {
    const token = await StorageService.get('auth_token');
    return { headers: { Authorization: `Bearer ${token}` } };
  }
}

export default HttpUtils;

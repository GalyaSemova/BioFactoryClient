import { request } from "../utils/AxiosHelper";
import authHeader from './auth-header';

const apiEndpoint = '/test/';

class UserService {
  getPublicContent() {
    return request('GET', `${apiEndpoint}all`);
  }

  getUserBoard() {
    // return request('GET', `${apiEndpoint}user`, { headers: authHeader() });
  }

  getModeratorBoard() {
    // return request('GET', `${apiEndpoint}mod`, { headers: authHeader() });
  }

  getAdminBoard() {
    // return request('GET', `${apiEndpoint}admin`, { headers: authHeader() });
  }
}

export default new UserService();
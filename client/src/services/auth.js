import BaseService from './base'

class AuthService extends BaseService {
  login (data) {
    return this.post(`${this.getUrl()}/sessions`, data)
  }
}

export default new AuthService();

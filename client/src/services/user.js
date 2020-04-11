import BaseService from './base'

class UserService extends BaseService {
  create (data) {
    return this.post(`${this.getUrl()}/users`, data)
  }
}

export default new UserService

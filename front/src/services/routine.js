import axios from 'axios'
import BaseService from './base'

class RoutineService extends BaseService {
  create (data) {
    return this.post(`${this.getUrl()}/routine`, data)
  }
  update (data) {
    return this.put(`${this.getUrl()}/routine`, data)
  }
  list ({ month, year }) {
    return this.get(`${this.getUrl()}/routine/${month}/${year}`)
  }
  find ({ id }) {
    return this.get(`${this.getUrl()}/routine/${id}`)
  }
  delete ({ id }) {
    return axios.delete(`${this.getUrl()}/routine/${id}`)
  }
}

export default new RoutineService();

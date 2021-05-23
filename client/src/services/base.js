import axios from 'axios'
import config from '../config'

class BaseService {
  getUrl () {
    return config.API_URL
  }
}

['get', 'post', 'put', 'patch', 'delete'].forEach(method => {
  // eslint-disable-next-line func-names
  BaseService.prototype[method] = function (url = this.getUrl(), ...args) {
    return axios[method](url, ...args)
      // .then(response => response)
      // .catch(error => { throw error.response })
  }
})

export default BaseService

import Cookies from 'js-cookie'
import axios from 'axios'

class SessionService {
  // Cookies
  getCookie (name) {
    const data = Cookies.get(name)
    return data || null
  }

  setCookie (name, data) {
    Cookies.set(name, JSON.stringify(data.token), {
      expires: data.expire / 60 / 24,
      domain: window.location.hostname
    })
  }

  removeCookie (name) {
    Cookies.remove(name, {
      expires: 1 / 48,
      domain: window.location.hostname
    })
  }

  configAxios = () => {
    let token = JSON.parse(this.getCookie('client_tokens'))

    token = (token) ? `Bearer ${token}` : token

    axios.defaults.headers.common.Authorization = token
  }
}

export default new SessionService()

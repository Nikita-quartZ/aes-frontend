import axios from 'axios'
import { MAIN_API } from '@/const'

export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
  },
  actions: {
    getToken () {
      axios.post(`${MAIN_API}/auth/token/login`, {

      })
    }
  }
}

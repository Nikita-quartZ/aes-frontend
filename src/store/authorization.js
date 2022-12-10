import axios from 'axios'
import { MAIN_API } from '@/const'

export default {
  namespaced: true,
  state: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNjcxOTk0LCJqdGkiOiJlNjFhMjgxMjlkNWE0ZjE0OWQxYTFhYWIyM2M3MjUxYiIsInVzZXJfaWQiOjN9.WO1xRfMVOv6MfXv5eqayc3KpxPZsDoxl7OMBPdN_hKw'
  },
  mutations: {
    logout (state) {
      state.token = ''
    }
  },
  actions: {
    getToken (context, info) {
      axios.post(`${MAIN_API}/auth/users`, {
        email: info.email,
        is_student: true,
        username: info.email,
        password: info.password,
        re_password: info.password
      })
        .then(() => {
          context.commit()
        })
    }
  }
}

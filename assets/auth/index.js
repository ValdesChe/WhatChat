const { SCHEME, HOSTNAME } =
  process.env.NODE_ENV === 'production'
  ? {SCHEME: 'http', HOSTNAME: window.location.hostname}
  : {SCHEME: 'http', HOSTNAME: 'localhost:4000'}

const API_URL = `${SCHEME}://${HOSTNAME}/`
const REGISTRATION_URL = `${API_URL}/accounts/sign_in`
const LOGIN_URL = `${API_URL}/accounts/log_in;`
const CURRENT_USER_URL = `${API_URL}/accounts/me`

export default {
  user: {
    authenticated: !!window.localStorage.getItem('id_token')
  },

}

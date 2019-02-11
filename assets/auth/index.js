/* eslint-disable no-unused-vars */

const { SCHEME, HOSTNAME } =
  process.env.NODE_ENV == 'production'
    ? { SCHEME: 'http', HOSTNAME: window.location.hostname+":4000" }
    : { SCHEME: 'http', HOSTNAME: 'localhost:4000' }

const API_URL = `${SCHEME}://${HOSTNAME}`
// eslint-disable-next-line no-unused-vars
const REGISTRATION_URL = `${API_URL}/accounts/sign_in`
const LOGIN_URL = `${API_URL}/accounts/sign_in`
const SIGNOUT_URL = `${API_URL}/accounts/sign_out`
const CURRENT_USER_URL = `${API_URL}/accounts/me`

export default {
  user: {
    id: Number.parseInt(window.localStorage.getItem('id_token')),
    name: window.localStorage.getItem('v_username'),
    image: window.localStorage.getItem('v_image'),
    email: window.localStorage.getItem('v_email'),
    authenticated: !!window.localStorage.getItem('id_token')
  },

  login (context, creds, redirect) {
    return context.axios.post(LOGIN_URL, creds)
  },

  signOut(context){
    window.localStorage.removeItem('id_token')
    window.localStorage.removeItem('v_username')
    window.localStorage.removeItem('v_email')
    window.localStorage.removeItem('v_image')
    window.localStorage.removeItem('token')
    // context.dispatch('USER_SIGNED_OUT')
    window.userToken = null
    context.$router.push({name: 'login'})
  }
  
}

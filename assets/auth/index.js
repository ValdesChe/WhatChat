/* eslint-disable no-unused-vars */

const { SCHEME, HOSTNAME } =
  process.env.NODE_ENV == 'production'
    ? { SCHEME: 'http', HOSTNAME: window.location.hostname+":4000" }
    : { SCHEME: 'http', HOSTNAME: 'localhost:4000' };

const API_URL = `${SCHEME}://${HOSTNAME}`;
// eslint-disable-next-line no-unused-vars
const REGISTRATION_URL = `${API_URL}/users`;
const LOGIN_URL = `${API_URL}/accounts/sign_in`;
const SIGNOUT_URL = `${API_URL}/accounts/sign_out`;
const CURRENT_USER_URL = `${API_URL}/accounts/me`;

const DEFAULT_PROFILE_IMAGE = 'https://loremflickr.com/400/400/profile?lock=100';

export default {
  user: {
    id: Number.parseInt(window.localStorage.getItem('id_token')),
    name: window.localStorage.getItem('v_username'),
    image: window.localStorage.getItem('v_image'),
    email: window.localStorage.getItem('v_email'),
    authenticated: !!window.localStorage.getItem('id_token')
  },
  /**
   * Login function
   * @param {*} context app context
   * @param {*} creds {username, password}
   * @param {*} redirect a callback
   */
  login (context, creds, redirect) {
    return context.axios.post(LOGIN_URL, creds)
  },

  /**
   * Signup function
   * @param {*} context app context
   * @param {*} creds {username, password}
   * @param {*} redirect a callback
   */
  signup (context, creds, redirect) {
    const user_info = {
      username: creds.username,
      image: DEFAULT_PROFILE_IMAGE,
      email: creds.email,
      password: creds.password
    }
    return context.axios.post(REGISTRATION_URL, user_info)
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

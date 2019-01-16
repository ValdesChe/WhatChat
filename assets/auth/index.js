
const { SCHEME, HOSTNAME } =
  process.env.NODE_ENV === 'production'
  ? { SCHEME: 'http', HOSTNAME: window.location.hostname }
  : {SCHEME: 'http', HOSTNAME: 'localhost:4000'}

const API_URL = `${SCHEME}://${HOSTNAME}`
const REGISTRATION_URL = `${API_URL}/accounts/sign_in`
const LOGIN_URL = `${API_URL}/accounts/sign_in`
const SIGNOUT_URL = `${API_URL}/accounts/sign_out`
const CURRENT_USER_URL = `${API_URL}/accounts/me`

export default {
  user: {
    id: window.localStorage.getItem('id_token'),
    name: window.localStorage.getItem('v_username'),
    image: window.localStorage.getItem('v_image'),
    authenticated: !!window.localStorage.getItem('id_token')
  },

  login (context, creds, redirect) {
    return context.axios.post(LOGIN_URL, creds)
  },


  signOut: (context, creds, redirect) => {
    context.axios.post(SIGNOUT_URL)
    .then( (data) => {
        window.localStorage.removeItem('id_token');
        window.localStorage.removeItem('v_username');
        window.localStorage.removeItem('v_email');
        window.localStorage.removeItem('v_image');
        window.localStorage.removeItem('token');
        context.dispatch( 'USER_SIGNED_OUT');

        coontext.$router.push("{name: 'login'}");
      })
      .catch(function (error) {

      });
    },
}

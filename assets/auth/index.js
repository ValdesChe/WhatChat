const { SCHEME, HOSTNAME } =
  process.env.NODE_ENV === 'production'
  ? {SCHEME: 'http', HOSTNAME: window.location.hostname}
  : {SCHEME: 'http', HOSTNAME: 'localhost:4000'}

const API_URL = `${SCHEME}://${HOSTNAME}`
const REGISTRATION_URL = `${API_URL}/accounts/sign_in`
const LOGIN_URL = `${API_URL}/accounts/sign_in`
const CURRENT_USER_URL = `${API_URL}/accounts/me`

export default {
  user: {
    id: window.localStorage.getItem('id_token'),
    name: window.localStorage.getItem('v_username'),
    image: window.localStorage.getItem('v_image'),
    authenticated: !!window.localStorage.getItem('id_token')
  },

  login (context, creds, redirect) {
    context.axios.post(LOGIN_URL, creds)
      .then(function (resp){
         console.log(resp.data);
         window.localStorage.setItem('id_token', resp.data.user.id);
         window.localStorage.setItem('v_username', resp.data.user.username);
         window.localStorage.setItem('v_email', resp.data.user.email);
         window.localStorage.setItem('v_image', resp.data.user.image);

         window.userToken = resp.data.user.id
        // this.user.authenticated = true

        window.location.replace(`${API_URL}`);
        // if (redirect) {
        //   window.location.replace(`${API_URL}`);
        //   // context.$router.push({name: 'home'})
        // }

      }, function (err) {
         console.log("Error Block Login");
         context.errorServer = err.response.data.errors.detail
      })
  },

}

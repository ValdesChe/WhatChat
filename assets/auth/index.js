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
    authenticated: !!window.localStorage.getItem('id_token')
  },

  login (context, creds, redirect) {
    context.axios.post(LOGIN_URL, creds)
      .then(resp => {
        // window.localStorage.setItem('id_token', resp.body.jwt)
        console.log(resp);
        this.user.authenticated = true

        if (redirect) {
          context.$router.push({path: redirect})
        }
      }, resp => {
        console.log("resp Eroor1"+resp);
        context.errorServer = resp.data.errors.detail
      }).catch((err) => {
         console.log("Erro 2 "+err);
      })
  },

}

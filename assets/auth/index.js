/* eslint-disable no-unused-vars */

const { SCHEME, HOSTNAME } =
  process.env.NODE_ENV === 'production'
    ? { SCHEME: 'https', HOSTNAME: window.location.hostname }
    : { SCHEME: 'http', HOSTNAME: 'localhost:4000' }

export const API_URL = `${SCHEME}://${HOSTNAME}`

export const DEFAULT_PROFILE_IMAGE = 'https://loremflickr.com/400/400/profile?lock=100'
export const TOKEN_KEY = 'token'
export const Urls_ = {
  REGISTRATION_URL: `${API_URL}/users`,
  LOGIN_URL: `${API_URL}/accounts/sign_in`,
  SIGNOUT_URL: `${API_URL}/accounts/sign_out`,
  PING_CURRENT_USER_URL: `${API_URL}/accounts/me`
}

export const Action = {
  AUTH_REQUEST: 'AUTH_REQUEST',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  AUTH_SIGNUP: 'AUTH_SIGNUP',
  AUTH_PING_CURRENT_USER_URL: 'AUTH_PING_CURRENT_USER_URL'
}

export const Mutation = {
  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER',

  AUTH_SUCCESS: 'AUTH_SUCCESS',
  USER_REQUEST: 'USER_REQUEST',
  AUTH_ERROR: 'AUTH_ERROR',
  CLEAR_AUTH: 'CLEAR_AUTH'
}

export function defineDefaultUser (creds) {
  return {
    username: creds.username,
    image: DEFAULT_PROFILE_IMAGE,
    email: creds.email,
    password: creds.password
  }
}

export function buildLoginErrorMessage (errors) {
  return errors && errors.email ? 'Email ' + errors.email[0] : 'Unexpected error occured !'
}

export function clearStorage () {
  window.localStorage.removeItem('id_token')
  window.localStorage.removeItem('v_username')
  window.localStorage.removeItem('v_email')
  window.localStorage.removeItem('v_image')
  window.localStorage.removeItem('token')
  // context.dispatch('USER_SIGNED_OUT')
  window.userToken = null
  // context.$router.push({ name: 'login' })
}

export function setItemsStorage (user) {
  window.localStorage.setItem('id_token', user.id)
  window.localStorage.setItem('v_username', user.username)
  window.localStorage.setItem('v_email', user.email)
  window.localStorage.setItem('v_image', user.image)

  window.userToken = user.token
  localStorage.setItem('token', user.token)
}

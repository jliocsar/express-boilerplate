import { decamelizeKeys } from 'humps'

export const GOOGLE_DEFAULT_SCOPE = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
]

export const GENERATE_AUTH_URL_OPTIONS = decamelizeKeys({
  accessType: 'offline',
  prompt: 'consent',
  scope: GOOGLE_DEFAULT_SCOPE,
})

export const ID_TOKEN_COOKIE_NAME = 'key'

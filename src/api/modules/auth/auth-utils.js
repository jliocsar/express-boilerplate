import { google } from 'googleapis'
import { camelizeKeys } from 'humps'

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URL } from '~config/environment'

import { InvalidUserException } from './auth-exceptions'
import { userSchema } from './auth-schemas'

export const getGoogleAuth = () =>
  new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URL)

export const getUserTokens = dirtyTokens => {
  const { idToken, expiryDate } = camelizeKeys(dirtyTokens)

  return {
    idToken,
    expiryDate,
  }
}

export const getUserInformation = async dirtyUser => {
  const { email, picture, name } = camelizeKeys(dirtyUser)
  const user = { email, picture, name }
  const isValidUser = userSchema.validateAsync(user)

  if (!isValidUser) {
    throw new InvalidUserException()
  }

  return user
}

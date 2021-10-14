import { google } from 'googleapis'
import { camelizeKeys } from 'humps'

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URL } from '~config/environment'

import { GOOGLE_USER_PERSON_FIELDS, GOOGLE_USER_RESOURCE_NAME } from './auth-constants'
import { userSchema } from './auth-schemas'

export const getGoogleAuth = () =>
  new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URL)

export const getGoogleUser = async auth => {
  const googlePeople = google.people({ version: 'v1', auth })

  const { data: userData } = await googlePeople.people.get({
    resourceName: GOOGLE_USER_RESOURCE_NAME,
    personFields: GOOGLE_USER_PERSON_FIELDS,
  })

  const [userName] = userData.names
  const [userEmailAddress] = userData.emailAddresses
  const user = await userSchema.validateAsync({
    fullName: userName.displayName,
    firstName: userName.givenName,
    lastName: userName.familyName,
    email: userEmailAddress.value,
  })

  return { user }
}

export const getUserTokens = dirtyTokens => {
  const { accessToken, refreshToken } = camelizeKeys(dirtyTokens)

  return {
    accessToken,
    refreshToken,
  }
}

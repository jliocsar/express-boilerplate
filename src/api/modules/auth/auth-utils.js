import { google } from 'googleapis'
import { decamelizeKeys } from 'humps'

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URL } from '~config/environment'

import {
  GOOGLE_DEFAULT_SCOPE,
  GOOGLE_USER_PERSON_FIELDS,
  GOOGLE_USER_RESOURCE_NAME,
} from './auth-constants'

export const getGoogleAuth = () =>
  new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URL)

export const getGoogleUser = async auth => {
  const googlePeople = google.people({ version: 'v1', auth })

  const { data } = await googlePeople.people.get({
    resourceName: GOOGLE_USER_RESOURCE_NAME,
    personFields: GOOGLE_USER_PERSON_FIELDS,
  })

  // TODO: format the data here
  return { user: data }
}

export const getConnectionURL = auth =>
  auth.generateAuthUrl(
    decamelizeKeys({
      accessType: 'offline',
      prompt: 'consent',
      scope: GOOGLE_DEFAULT_SCOPE,
    }),
  )

export const getUserTokens = async (auth, code) => {
  const { tokens } = await auth.getToken(decodeURIComponent(code))
  return tokens
}

import { GENERATE_AUTH_URL_OPTIONS } from './auth-constants'
import { GoogleAuthException } from './auth-exceptions'
import { getGoogleAuth, getGoogleUser, getUserTokens } from './auth-utils'

export const googleAuthClient = getGoogleAuth()

export const getGoogleConnection = () => {
  const connectionURL = googleAuthClient.generateAuthUrl(GENERATE_AUTH_URL_OPTIONS)
  return { connectionURL }
}

export const googleSignIn = async code => {
  try {
    const { tokens } = await googleAuthClient.getToken(decodeURIComponent(code))
    googleAuthClient.setCredentials(tokens)
    const { user } = await getGoogleUser(googleAuthClient)
    return { user, ...getUserTokens(tokens) }
  } catch (error) {
    throw new GoogleAuthException(error.response?.data)
  }
}

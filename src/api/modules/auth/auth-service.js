import { GoogleAuthException } from './auth-exceptions'
import { getConnectionURL, getGoogleAuth, getGoogleUser, getUserTokens } from './auth-utils'

export const googleAuthClient = getGoogleAuth()

export const getGoogleConnection = () => {
  const connectionURL = getConnectionURL(googleAuthClient)
  return { connectionURL }
}

export const googleSignIn = async code => {
  try {
    const tokens = await getUserTokens(googleAuthClient, code)
    googleAuthClient.setCredentials(tokens)
    const { user } = await getGoogleUser(googleAuthClient)
    return { user, tokens }
  } catch (error) {
    throw new GoogleAuthException(error.response.data)
  }
}

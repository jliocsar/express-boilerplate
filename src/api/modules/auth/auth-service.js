import { GENERATE_AUTH_URL_OPTIONS } from './auth-constants'
import {
  GoogleAuthException,
  InvalidTokenException,
  MissingTokenException,
} from './auth-exceptions'
import { ROUTES } from './auth-routes'
import { getGoogleAuth, getUserInformation, getUserTokens } from './auth-utils'

export const googleAuthClient = getGoogleAuth()

export const getGoogleConnection = () => {
  const connectionURL = googleAuthClient.generateAuthUrl(GENERATE_AUTH_URL_OPTIONS)
  return { connectionURL }
}

export const googleSignIn = async code => {
  try {
    const { tokens: dirtyTokens } = await googleAuthClient.getToken(decodeURIComponent(code))
    googleAuthClient.setCredentials(dirtyTokens)
    const userTokens = getUserTokens(dirtyTokens)
    const { payload: dirtyUser } = await googleAuthClient.verifyIdToken({
      idToken: userTokens.idToken,
    })
    const user = await getUserInformation(dirtyUser)
    return { user, ...userTokens }
  } catch (error) {
    throw new GoogleAuthException(error.response?.data)
  }
}

export const verifyUserIdToken = async ({ key: idToken }) => {
  if (!idToken) {
    throw new MissingTokenException()
  }

  try {
    await googleAuthClient.verifyIdToken({
      idToken,
    })
  } catch {
    throw new InvalidTokenException()
  }
}

export const verifyRouteAuthorization = path => {
  const authRoutes = Object.values(ROUTES)
  return authRoutes.includes(path)
}

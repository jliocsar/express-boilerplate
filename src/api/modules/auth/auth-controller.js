import { DEV } from '~config/environment'

import { ID_TOKEN_COOKIE_NAME } from './auth-constants'
import * as authService from './auth-service'

export const getGoogleConnection = async (request, response, next) => {
  const connectionURL = authService.getGoogleConnection()
  return response.json(connectionURL)
}

export const googleSignIn = async (request, response, next) => {
  const { user, ...tokenData } = await authService.googleSignIn(request.body.code)

  response.cookie(ID_TOKEN_COOKIE_NAME, tokenData.idToken, {
    secure: !DEV,
    httpOnly: true,
    expires: new Date(tokenData.expiryDate),
  })

  return response.json({ user })
}

export const verifyUserIdToken = async (request, response, next) => {
  const isAllowed = authService.verifyRouteAuthorization(request.path)

  if (isAllowed) {
    return next()
  }

  await authService.verifyUserIdToken(request.cookies)
  return next()
}

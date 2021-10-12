import * as authService from './auth-service'

export const getGoogleConnection = async (request, response, next) => {
  const connectionURL = authService.getGoogleConnection()
  return response.json(connectionURL)
}

export const googleSignIn = async (request, response, next) => {
  const user = await authService.googleSignIn(request.body.code)
  return response.json(user)
}

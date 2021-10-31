import { Router } from 'express'

import { getGoogleConnection, googleSignIn, verifyUserIdToken } from './auth-controller'
import { validateUserCode } from './auth-pipes'

export const ROUTES = {
  GOOGLE_LOGIN: '/login/google',
  GOOGLE_CONNECTION: '/connection/google',
}

const authRouter = Router()

authRouter.use(verifyUserIdToken)
authRouter.route(ROUTES.GOOGLE_LOGIN).post([validateUserCode], googleSignIn)
authRouter.route(ROUTES.GOOGLE_CONNECTION).get(getGoogleConnection)

export { authRouter }

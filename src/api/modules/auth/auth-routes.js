import { Router } from 'express'

import { getGoogleConnection, googleSignIn } from './auth-controller'

export const ROUTES = {
  LOGIN: '/login',
  CONNECTION: '/connection',
}

const authRouter = Router()

authRouter.route(ROUTES.LOGIN).post(googleSignIn)

authRouter.route(ROUTES.CONNECTION).get(getGoogleConnection)

export { authRouter }

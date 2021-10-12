import 'dotenv/config'
import 'express-async-errors'

import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'

import { errorHandler } from './middlewares/error-handler'
import { router } from './router'

export const applyMiddlewares = app => {
  app.use(express.json())
  app.use(cookieParser())
  app.use(morgan('tiny'))
  app.use(router)
  app.use(errorHandler())
}

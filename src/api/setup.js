import 'dotenv/config'
import 'express-async-errors'

import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import { errorHandler } from './middlewares/error-handler'
import { router } from './router'

export const applyMiddlewares = app => {
  app.use(express.json())
  app.use(cors())
  app.use(cookieParser())
  app.use(morgan('tiny'))
  app.use(helmet())
  app.use(router)
  app.use(errorHandler())
}

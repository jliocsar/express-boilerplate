import express from 'express'

import { applyMiddlewares } from './api/setup'
import { PORT, isDev } from './config/environment'
import { runPrismaStudio } from './setup'

const app = express()

applyMiddlewares(app)

if (isDev) {
  runPrismaStudio()
}

app.listen(PORT, () => {
  console.log('Server running at port', PORT)
})

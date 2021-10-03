import express from 'express'

import { applyMiddlewares } from './api/setup'
import { PORT } from './config/environment'

const app = express()

applyMiddlewares(app)

app.listen(PORT, () => {
  console.log('Server running at port', PORT)
})

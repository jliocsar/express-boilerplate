import { Router } from 'express'
import { Http } from '@status/codes'

import { booksRouter } from './modules/books/routes'
import { publishersRouter } from './modules/publishers/routes'
import { authorsRouter } from './modules/authors/routes'

const router = Router()

router.use(booksRouter).use(publishersRouter).use(authorsRouter)

router.get('/', (req, res) =>
  res.status(Http.ImATeapot).json({
    healthy: true,
  }),
)

export { router }

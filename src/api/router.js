import { Router } from 'express'
import { Http } from '@status/codes'

import { booksRouter } from './modules/books/books-routes'
import { publishersRouter } from './modules/publishers/publishers-routes'
import { authorsRouter } from './modules/authors/authors-routes'

const router = Router()

router.use(booksRouter).use(publishersRouter).use(authorsRouter)

router.get('/', (request, response) =>
  response.status(Http.ImATeapot).json({
    healthy: true,
  }),
)

export { router }

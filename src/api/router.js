import { Http } from '@status/codes'
import { Router } from 'express'

import { authRouter } from './modules/auth/auth-routes'
import { authorsRouter } from './modules/authors/authors-routes'
import { booksRouter } from './modules/books/books-routes'
import { publishersRouter } from './modules/publishers/publishers-routes'

const router = Router()

router.use(authRouter).use(booksRouter).use(publishersRouter).use(authorsRouter)

router.get('/', (request, response) =>
  response.status(Http.ImATeapot).json({
    healthy: true,
  }),
)

export { router }

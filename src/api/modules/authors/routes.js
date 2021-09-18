import { Router } from 'express'

import {
  findAllAuthors,
  createAuthor,
  deleteAllAuthors,
  findAuthor,
  deleteAuthor,
} from './controller'
import { validateAuthor, validateAuthorId } from './pipes'

const authorsRouter = Router()

authorsRouter
  .route('/authors')
  .get(findAllAuthors)
  .delete(deleteAllAuthors)
  .post([validateAuthor], createAuthor)

authorsRouter
  .route('/authors/:id')
  .get([validateAuthorId], findAuthor)
  .delete([validateAuthorId], deleteAuthor)

export { authorsRouter }

import { Router } from 'express'

import {
  findAllAuthors,
  createAuthor,
  deleteAllAuthors,
  findAuthor,
  deleteAuthor,
} from './authors-controller'
import { validateAuthor, validateAuthorId } from './authors-pipes'

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

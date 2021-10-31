import { Router } from 'express'

import {
  createAuthor,
  deleteAllAuthors,
  deleteAuthor,
  findAllAuthors,
  findAuthor,
} from './authors-controller'
import { validateAuthor, validateAuthorId } from './authors-pipes'

export const ROUTES = {
  AUTHORS: '/authors',
  AUTHORS_ID: '/authors/:id',
}

const authorsRouter = Router()

authorsRouter
  .route(ROUTES.AUTHORS)
  .get(findAllAuthors)
  .delete(deleteAllAuthors)
  .post([validateAuthor], createAuthor)
authorsRouter
  .route(ROUTES.AUTHORS_ID)
  .get([validateAuthorId], findAuthor)
  .delete([validateAuthorId], deleteAuthor)

export { authorsRouter }

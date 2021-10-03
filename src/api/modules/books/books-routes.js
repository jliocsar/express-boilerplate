import { Router } from 'express'

import { createBook, deleteAllBooks, deleteBook, findAllBooks, findBook } from './books-controller'
import { validateBook, validateBookId } from './books-pipes'

export const ROUTES = {
  BOOKS: '/books',
  BOOKS_ID: '/books/:id',
}

const booksRouter = Router()

booksRouter
  .route(ROUTES.BOOKS)
  .get(findAllBooks)
  .delete(deleteAllBooks)
  .post([validateBook], createBook)

booksRouter
  .route(ROUTES.BOOKS_ID)
  .get([validateBookId], findBook)
  .delete([validateBookId], deleteBook)

export { booksRouter }

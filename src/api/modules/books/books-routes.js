import { Router } from 'express'

import {
  findAllBooks,
  createBook,
  deleteAllBooks,
  findBook,
  deleteBook,
} from './books-controller'
import { validateBook, validateBookId } from './books-pipes'

const booksRouter = Router()

booksRouter
  .route('/books')
  .get(findAllBooks)
  .delete(deleteAllBooks)
  .post([validateBook], createBook)

booksRouter
  .route('/books/:id')
  .get([validateBookId], findBook)
  .delete([validateBookId], deleteBook)

export { booksRouter }

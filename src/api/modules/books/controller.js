import { Http } from '@status/codes'

import * as booksService from './service'

export const findAllBooks = async (req, res, next) => {
  const allBooks = await booksService.findAllBooks()
  return res.json(allBooks)
}

export const findBook = async (req, res, next) => {
  const book = await booksService.findBook(req.params.id)
  return res.json(book)
}

export const deleteAllBooks = async (req, res, next) => {
  const deletedBooks = await booksService.deleteAllBooks()
  return res.status(Http.NoContent).json(deletedBooks)
}

export const deleteBook = async (req, res, next) => {
  const deletedBook = await booksService.deleteBook(req.params.id)
  return res.status(Http.NoContent).json(deletedBook)
}

export const createBook = async (req, res, next) => {
  const createdBook = await booksService.createBook(req.body)
  return res.status(Http.Created).json(createdBook)
}

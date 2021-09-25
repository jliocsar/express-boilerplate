import { Http } from '@status/codes'

import * as booksService from './books-service'

export const findAllBooks = async (request, response, next) => {
  const allBooks = await booksService.findAllBooks()
  return response.json(allBooks)
}

export const findBook = async (request, response, next) => {
  const book = await booksService.findBook(request.params.id)
  return response.json(book)
}

export const deleteAllBooks = async (request, response, next) => {
  const deletedBooks = await booksService.deleteAllBooks()
  return response.status(Http.NoContent).json(deletedBooks)
}

export const deleteBook = async (request, response, next) => {
  const deletedBook = await booksService.deleteBook(request.params.id)
  return response.status(Http.NoContent).json(deletedBook)
}

export const createBook = async (request, response, next) => {
  const createdBook = await booksService.createBook(request.body)
  return response.status(Http.Created).json(createdBook)
}

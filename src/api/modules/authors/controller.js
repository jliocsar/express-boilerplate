import { Http } from '@status/codes'

import * as authorsService from './service'

export const findAllAuthors = async (request, response, next) => {
  const allAuthors = await authorsService.findAllAuthors()
  return response.json(allAuthors)
}

export const findAuthor = async (request, response, next) => {
  const author = await authorsService.findAuthor(request.params.id)
  return response.json(author)
}

export const deleteAllAuthors = async (request, response, next) => {
  const deletedAuthors = await authorsService.deleteAllAuthors()
  return response.status(Http.NoContent).json(deletedAuthors)
}

export const deleteAuthor = async (request, response, next) => {
  const deletedAuthor = await authorsService.deleteAuthor(request.params.id)
  return response.status(Http.NoContent).json(deletedAuthor)
}

export const createAuthor = async (request, response, next) => {
  const createdAuthor = await authorsService.createAuthor(request.body)
  return response.status(Http.Created).json(createdAuthor)
}

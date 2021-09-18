import { Http } from '@status/codes'

import * as authorsService from './service'

export const findAllAuthors = async (req, res, next) => {
  const allAuthors = await authorsService.findAllAuthors()
  return res.json(allAuthors)
}

export const findAuthor = async (req, res, next) => {
  const author = await authorsService.findAuthor(req.params.id)
  return res.json(author)
}

export const deleteAllAuthors = async (req, res, next) => {
  const deletedAuthors = await authorsService.deleteAllAuthors()
  return res.status(Http.NoContent).json(deletedAuthors)
}

export const deleteAuthor = async (req, res, next) => {
  const deletedAuthor = await authorsService.deleteAuthor(req.params.id)
  return res.status(Http.NoContent).json(deletedAuthor)
}

export const createAuthor = async (req, res, next) => {
  const createdAuthor = await authorsService.createAuthor(req.body)
  return res.status(Http.Created).json(createdAuthor)
}

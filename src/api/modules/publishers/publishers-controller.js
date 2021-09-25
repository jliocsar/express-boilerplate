import { Http } from '@status/codes'

import * as publishersService from './publishers-service'

export const findAllPublishers = async (request, response, next) => {
  const allPublishers = await publishersService.findAllPublishers()
  return response.json(allPublishers)
}

export const findPublisher = async (request, response, next) => {
  const publisher = await publishersService.findPublisher(request.params.id)
  return response.json(publisher)
}

export const deleteAllPublishers = async (request, response, next) => {
  const deletedPublishers = await publishersService.deleteAllPublishers()
  return response.status(Http.NoContent).json(deletedPublishers)
}

export const deletePublisher = async (request, response, next) => {
  const deletedPublisher = await publishersService.deletePublisher(
    request.params.id,
  )
  return response.status(Http.NoContent).json(deletedPublisher)
}

export const createPublisher = async (request, response, next) => {
  const createdPublisher = await publishersService.createPublisher(request.body)
  return response.status(Http.Created).json(createdPublisher)
}

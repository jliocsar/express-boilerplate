import { Http } from '@status/codes'

import * as publishersService from './service'

export const findAllPublishers = async (req, res, next) => {
  const allPublishers = await publishersService.findAllPublishers()
  return res.json(allPublishers)
}

export const findPublisher = async (req, res, next) => {
  const publisher = await publishersService.findPublisher(req.params.id)
  return res.json(publisher)
}

export const deleteAllPublishers = async (req, res, next) => {
  const deletedPublishers = await publishersService.deleteAllPublishers()
  return res.status(Http.NoContent).json(deletedPublishers)
}

export const deletePublisher = async (req, res, next) => {
  const deletedPublisher = await publishersService.deletePublisher(
    req.params.id,
  )
  return res.status(Http.NoContent).json(deletedPublisher)
}

export const createPublisher = async (req, res, next) => {
  const createdPublisher = await publishersService.createPublisher(req.body)
  return res.status(Http.Created).json(createdPublisher)
}

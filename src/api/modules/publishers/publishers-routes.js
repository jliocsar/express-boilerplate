import { Router } from 'express'

import {
  findAllPublishers,
  createPublisher,
  findPublisher,
  deletePublisher,
  deleteAllPublishers,
} from './publishers-controller'
import { validatePublisher, validatePublisherId } from './publishers-pipes'

const publishersRouter = Router()

publishersRouter
  .route('/publishers')
  .get(findAllPublishers)
  .delete(deleteAllPublishers)
  .post([validatePublisher], createPublisher)

publishersRouter
  .route('/publishers/:id')
  .get([validatePublisherId], findPublisher)
  .delete([validatePublisherId], deletePublisher)

export { publishersRouter }

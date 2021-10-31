import { Router } from 'express'

import {
  createPublisher,
  deleteAllPublishers,
  deletePublisher,
  findAllPublishers,
  findPublisher,
} from './publishers-controller'
import { validatePublisher, validatePublisherId } from './publishers-pipes'

export const ROUTES = {
  PUBLISHERS: '/publishers',
  PUBLISHERS_ID: '/publishers/:id',
}

const publishersRouter = Router()

publishersRouter
  .route(ROUTES.PUBLISHERS)
  .get(findAllPublishers)
  .delete(deleteAllPublishers)
  .post([validatePublisher], createPublisher)
publishersRouter
  .route(ROUTES.PUBLISHERS_ID)
  .get([validatePublisherId], findPublisher)
  .delete([validatePublisherId], deletePublisher)

export { publishersRouter }

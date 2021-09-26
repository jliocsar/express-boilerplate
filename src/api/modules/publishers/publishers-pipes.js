import { Segments } from 'celebrate'

import { createValidationMiddleware } from '~common/pipes'

import { publisherSchema, publisherIdSchema } from './publishers-schemas'

export const validatePublisher = createValidationMiddleware({
  [Segments.BODY]: publisherSchema,
})

export const validatePublisherId = createValidationMiddleware({
  [Segments.PARAMS]: publisherIdSchema,
})

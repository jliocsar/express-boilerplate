import { Segments } from 'celebrate'

import { createValidationMiddleware } from '~api/shared/pipes'

import { publisherSchema, publisherIdSchema } from './schemas'

export const validatePublisher = createValidationMiddleware({
  [Segments.BODY]: publisherSchema,
})

export const validatePublisherId = createValidationMiddleware({
  [Segments.PARAMS]: publisherIdSchema,
})

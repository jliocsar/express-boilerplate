import { Joi, Segments } from 'celebrate'

import { createValidationMiddleware } from '~api/shared/pipes'

import { publisherSchema } from './schemas'

export const validatePublisher = createValidationMiddleware({
  [Segments.BODY]: publisherSchema,
})

export const validatePublisherId = createValidationMiddleware({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
})

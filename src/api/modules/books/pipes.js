import { Joi, Segments } from 'celebrate'

import { createValidationMiddleware } from '~api/shared/pipes'

import { bookSchema } from './schemas'

export const validateBook = createValidationMiddleware({
  [Segments.BODY]: bookSchema,
})

export const validateBookId = createValidationMiddleware({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
})

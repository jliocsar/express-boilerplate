import { Joi, Segments } from 'celebrate'

import { createValidationMiddleware } from '~api/shared/pipes'

import { authorSchema } from './schemas'

export const validateAuthor = createValidationMiddleware({
  [Segments.BODY]: authorSchema,
})

export const validateAuthorId = createValidationMiddleware({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
})

import { Segments } from 'celebrate'

import { createValidationMiddleware } from '~common/pipes'

import { bookIdSchema, bookSchema } from './books-schemas'

export const validateBook = createValidationMiddleware({
  [Segments.BODY]: bookSchema,
})

export const validateBookId = createValidationMiddleware({
  [Segments.PARAMS]: bookIdSchema,
})

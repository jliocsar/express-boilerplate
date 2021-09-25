import { Segments } from 'celebrate'

import { createValidationMiddleware } from '~api/shared/pipes'

import { bookSchema, bookIdSchema } from './books-schemas'

export const validateBook = createValidationMiddleware({
  [Segments.BODY]: bookSchema,
})

export const validateBookId = createValidationMiddleware({
  [Segments.PARAMS]: bookIdSchema,
})

import { Segments } from 'celebrate'

import { createValidationMiddleware } from '~common/pipes'

import { authorIdSchema, authorSchema } from './authors-schemas'

export const validateAuthor = createValidationMiddleware({
  [Segments.BODY]: authorSchema,
})

export const validateAuthorId = createValidationMiddleware({
  [Segments.PARAMS]: authorIdSchema,
})

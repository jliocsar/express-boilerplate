import { Segments } from 'celebrate'

import { createValidationMiddleware } from '~api/shared/pipes'

import { authorSchema, authorIdSchema } from './authors-schemas'

export const validateAuthor = createValidationMiddleware({
  [Segments.BODY]: authorSchema,
})

export const validateAuthorId = createValidationMiddleware({
  [Segments.PARAMS]: authorIdSchema,
})

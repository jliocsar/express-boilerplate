import { Segments } from 'celebrate'

import { createValidationMiddleware } from '~common/pipes'

import { userCodeSchema } from './auth-schemas'

export const validateUserCode = createValidationMiddleware({
  [Segments.BODY]: userCodeSchema,
})

import { celebrate } from 'celebrate'

export const createValidationMiddleware = requestRules =>
  celebrate(requestRules, {
    convert: true,
    cache: true,
    errors: {
      wrap: {
        label: false,
      },
    },
  })

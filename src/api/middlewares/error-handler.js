import { Http } from '@status/codes'
import { isCelebrateError } from 'celebrate'

import { formatCelebrateError, isHttpError } from '~common/utils'

export const errorHandler = () => (error, request, response, next) => {
  if (isCelebrateError(error)) {
    const details = formatCelebrateError(error.details.get('body'))

    return response.status(Http.BadRequest).json({ details })
  }

  if (isHttpError(error)) {
    const { message, statusCode, details } = error

    return response.status(statusCode).json({
      message,
      ...(details && { details }),
    })
  }

  console.error(error)
  return next()
}

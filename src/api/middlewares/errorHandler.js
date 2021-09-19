import { Http } from '@status/codes'
import { CelebrateError } from 'celebrate'

import { HttpException } from '~api/shared/exceptions'
import { formatCelebrateError } from '~utils/formatCelebrateError'

export const errorHandler = () => (error, req, res, next) => {
  if (error instanceof CelebrateError) {
    const details = formatCelebrateError(error.details.get('body'))

    return res.status(Http.BadRequest).json({ details })
  }

  if (error instanceof HttpException) {
    const { message, statusCode, details } = error

    return res.status(statusCode).json({
      message,
      ...(details && { details }),
    })
  }

  console.error(error)
  return next()
}

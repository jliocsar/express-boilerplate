import { HttpException } from '~api/shared/exceptions'

export const errorHandler = () => (error, req, res, next) => {
  if (error instanceof HttpException) {
    const { message, statusCode, details } = error

    return res.status(statusCode).json({
      error: {
        message,
        ...(details && { details }),
      },
    })
  }

  console.error(error)
  return next()
}

import { HttpException } from './exceptions'

export const isHttpError = error => error instanceof HttpException

export const formatCelebrateError = body =>
  body.details.reduce(
    (errors, error) => ({
      ...errors,
      [error.context.key]: error.message,
    }),
    {},
  )

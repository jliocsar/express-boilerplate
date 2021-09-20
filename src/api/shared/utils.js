import { HttpException } from './exceptions'

export const isHttpError = error => error instanceof HttpException

export const formatCelebrateError = body =>
  body.details.map(({ message }) => message)

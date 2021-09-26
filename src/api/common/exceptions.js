import { Http } from '@status/codes'

export class HttpException extends Error {
  constructor(message = 'Server error', statusCode = Http.InternalServerError, details) {
    super(message)
    this.statusCode = statusCode
    this.details = details
  }
}

export class NotFoundException extends HttpException {
  constructor() {
    super('Not found', Http.NotFound)
  }
}

export class PrismaException extends HttpException {
  constructor(message, status) {
    super(message ?? 'Database error', status)
  }
}

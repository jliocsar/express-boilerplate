import { Http } from '@status/codes'
import { camelizeKeys } from 'humps'

import { HttpException } from '~common/exceptions'

export class GoogleAuthException extends HttpException {
  constructor(dirtyError = {}) {
    // TODO: check if this can be moved to a `gaxios` interceptor or something
    const error = camelizeKeys(dirtyError)

    super(
      error?.errorDescription ?? 'An error occurred during the authentication.',
      Http.Unauthorized,
    )
  }
}

export class InvalidTokenException extends HttpException {
  constructor() {
    super('Invalid user token', Http.Unauthorized)
  }
}

export class MissingTokenException extends HttpException {
  constructor() {
    super('Missing user token', Http.BadRequest)
  }
}

export class InvalidUserException extends HttpException {
  constructor() {
    super('Invalid user type', Http.BadRequest)
  }
}

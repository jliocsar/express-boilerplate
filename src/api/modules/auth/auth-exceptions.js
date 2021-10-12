import { Http } from '@status/codes'
import { camelizeKeys } from 'humps'

import { HttpException } from '~common/exceptions'

export class GoogleAuthException extends HttpException {
  constructor(dirtyError) {
    // TODO: check if this can be moved to a `gaxios` interceptor or something
    const error = camelizeKeys(dirtyError)
    super(error.errorDescription, Http.Unauthorized)
  }
}

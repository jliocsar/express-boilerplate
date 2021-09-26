import { Http } from '@status/codes'

import { PrismaException } from '~common/exceptions'

export class UniqueRegisterCodeViolationException extends PrismaException {
  constructor() {
    super('An author with this registerCode already exists!', Http.BadRequest)
  }
}

export class AuthorNotFoundException extends PrismaException {
  constructor() {
    super('Author not found', Http.NotFound)
  }
}

import { Http } from '@status/codes'

import { PrismaException } from '~common/exceptions'

export class UniqueRegisterCodeViolationException extends PrismaException {
  constructor() {
    super('A publisher with this registerCode already exists!', Http.BadRequest)
  }
}

export class PublisherNotFoundException extends PrismaException {
  constructor() {
    super('Publisher not found', Http.NotFound)
  }
}

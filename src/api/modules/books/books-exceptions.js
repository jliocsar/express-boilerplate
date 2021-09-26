import { Http } from '@status/codes'

import { PrismaException } from '~common/exceptions'

export class UniqueCutterViolationException extends PrismaException {
  constructor() {
    super('A book with this cutter already exists!', Http.BadRequest)
  }
}

export class BookNotFoundException extends PrismaException {
  constructor() {
    super('Book not found', Http.NotFound)
  }
}

export class RecordNotFoundException extends PrismaException {
  constructor(cause) {
    // TODO: fix this smelly code 😖
    const recordModelName = cause.match(/('\w+')/)[0].replaceAll("'", '')
    super(`${recordModelName} not found`, Http.NotFound)
  }
}

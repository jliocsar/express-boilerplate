import { PrismaError } from 'prisma-error-enum'

import { prisma } from '~database/client'

import {
  BookNotFoundException,
  RecordNotFoundException,
  UniqueCutterViolationException,
} from './books-exceptions'
import { BOOK_SELECT } from './books-constants'

export const findAllBooks = () =>
  prisma.book.findMany({
    select: BOOK_SELECT,
  })

export const findBook = async id => {
  const book = await prisma.book.findUnique({
    where: { id },
    select: BOOK_SELECT,
  })

  if (!book) {
    throw new BookNotFoundException()
  }

  return book
}

export const deleteAllBooks = async () => {
  await prisma.book.deleteMany()
}

export const deleteBook = async id => {
  try {
    return await prisma.book.delete({
      where: { id },
      select: BOOK_SELECT,
    })
  } catch (error) {
    switch (error.code) {
      case PrismaError.RecordsNotFound:
        throw new BookNotFoundException()
      default:
        throw error
    }
  }
}

export const createBook = async body => {
  try {
    return await prisma.book.create({
      data: {
        title: body.title,
        cutter: body.cutter,
        author: {
          connect: {
            id: body.authorId,
          },
        },
        publisher: {
          connect: {
            id: body.publisherId,
          },
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      select: BOOK_SELECT,
    })
  } catch (error) {
    switch (error.code) {
      case PrismaError.UniqueConstraintViolation:
        throw new UniqueCutterViolationException()
      case PrismaError.RecordsNotFound:
        throw new RecordNotFoundException(error.meta.cause)
      default:
        throw error
    }
  }
}

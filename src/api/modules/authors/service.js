import { PrismaError } from 'prisma-error-enum'

import { prisma } from '~database/client'

import {
  AuthorNotFoundException,
  UniqueRegisterCodeViolationException,
} from './exceptions'

export const findAllAuthors = () => prisma.author.findMany()

export const findAuthor = async id => {
  const author = await prisma.author.findUnique({
    where: { id },
  })

  if (!author) {
    throw new AuthorNotFoundException()
  }

  return author
}

export const deleteAllAuthors = async () => {
  await prisma.$transaction([
    prisma.book.deleteMany(),
    prisma.author.deleteMany(),
  ])
}

export const deleteAuthor = async id => {
  try {
    return await prisma.author.delete({
      where: { id },
    })
  } catch (error) {
    switch (error.code) {
      case 'P2025':
        throw new AuthorNotFoundException()
      default:
        throw error
    }
  }
}

export const createAuthor = async body => {
  try {
    return await prisma.author.create({
      data: {
        name: body.name,
        registerCode: body.registerCode,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })
  } catch (error) {
    switch (error.code) {
      case PrismaError.UniqueConstraintViolation:
        throw new UniqueRegisterCodeViolationException()
      default:
        throw error
    }
  }
}

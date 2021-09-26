import { PrismaError } from 'prisma-error-enum'

import { prisma } from '~database/client'

import {
  PublisherNotFoundException,
  UniqueRegisterCodeViolationException,
} from './publishers-exceptions'

export const findAllPublishers = () => prisma.publisher.findMany()

export const findPublisher = async id => {
  const publisher = await prisma.publisher.findUnique({
    where: { id },
  })

  if (!publisher) {
    throw new PublisherNotFoundException()
  }

  return publisher
}

export const deleteAllPublishers = async () => {
  await prisma.$transaction([prisma.book.deleteMany(), prisma.publisher.deleteMany()])
}

export const deletePublisher = async id => {
  try {
    return await prisma.publisher.delete({
      where: { id },
    })
  } catch (error) {
    switch (error.code) {
      case PrismaError.RecordsNotFound:
        throw new PublisherNotFoundException()
      default:
        throw error
    }
  }
}

export const createPublisher = async body => {
  try {
    return await prisma.publisher.create({
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

import { Joi } from 'celebrate'

import { authorSchema } from '../authors/authors-schemas'
import { publisherSchema } from '../publishers/publishers-schemas'

export const bookSchema = Joi.object({
  title: Joi.string().required(),
  cutter: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  author: authorSchema,
  authorId: Joi.number().positive(),
  publisher: publisherSchema,
  publisherId: Joi.number().positive(),
})

export const bookIdSchema = Joi.object({
  id: Joi.number().positive().required(),
})

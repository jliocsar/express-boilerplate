import { Joi } from 'celebrate'

export const publisherSchema = Joi.object({
  name: Joi.string().required(),
  registerCode: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
})

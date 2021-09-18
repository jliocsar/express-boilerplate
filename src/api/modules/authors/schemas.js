import { Joi } from 'celebrate'

export const authorSchema = Joi.object({
  name: Joi.string().required(),
  registerCode: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
})

import { Joi } from 'celebrate'

export const userSchema = Joi.object({
  fullName: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
})

export const userCodeSchema = Joi.object({
  code: Joi.string().required(),
})

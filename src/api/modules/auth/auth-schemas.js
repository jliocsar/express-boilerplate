import { Joi } from 'celebrate'

export const userSchema = Joi.object({
  email: Joi.string().required(),
  name: Joi.string().required(),
  picture: Joi.string().required(),
})

export const userCodeSchema = Joi.object({
  code: Joi.string().required(),
})

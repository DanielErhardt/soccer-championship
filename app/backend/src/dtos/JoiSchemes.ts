import * as Joi from 'joi';

const MISSING_FIELD = '400|All fields must be filled';

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': MISSING_FIELD,
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': MISSING_FIELD,
  }),
}).messages({
  'any.required': MISSING_FIELD,
});

export const userSchema = Joi.object({});

export const teamSchema = Joi.object({});

export const matchSchema = Joi.object({});

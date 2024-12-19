import Joi from "joi";

export const updateUserSchema = Joi.object({
    email: Joi.string().optional(),
    username: Joi.string().optional(),
    password: Joi.string().optional(),
    avatarUrl: Joi.string().optional(),
    description: Joi.string().optional(),
}).or('email', 'username', 'password', 'avatarUrl', 'description')

export const createUserSchema = Joi.object({
    email: Joi.string().required().messages({
        'any.required': 'email is required',
    }),
    username: Joi.string().required().messages({
        'any.required': 'username is required',
    }),
    password: Joi.string().required().messages({
        'any.required': 'password is required',
    }),
    avatarUrl: Joi.string().optional(),
    description: Joi.string().optional(),
})
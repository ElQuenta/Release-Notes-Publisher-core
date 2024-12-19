import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateBody = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.details.map(detail => detail.message).join(', '),
      });
      return;
    }
    next();
  };
};

export default validateBody

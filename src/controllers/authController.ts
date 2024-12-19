import { Request, Response } from 'express';
import * as AuthService from '../services/authService';
import { sendSuccess } from '../handlers/successHandler';
import { handleError } from '../handlers/errorHandler';

export const registry = async (req: Request, res: Response) => {
  const userData = req.body
  try {
    const user = await AuthService.create(userData);
    sendSuccess(res, user, 'User created successfuly');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userdata = await AuthService.login(email,password);
    sendSuccess(res,userdata,'User logged successfuly')
  }
  catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
}
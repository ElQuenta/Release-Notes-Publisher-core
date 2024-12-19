import { Request, Response } from 'express';
import * as UserService from '../services/userService';
import { sendSuccess } from '../handlers/successHandler';
import { handleError } from '../handlers/errorHandler';

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAll();
    sendSuccess(res, users, 'Users fetched successfully');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await UserService.getById(id)
    sendSuccess(res, user, 'User fetched successfully');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

export const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const userData = req.body;
  try {
    const user = await UserService.update(id, userData);
    sendSuccess(res, user, 'User updated Successfully');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

export const remove = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await UserService.remove(id)
    sendSuccess(res, user, 'User removed successfully');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

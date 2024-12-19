import * as UserInteractor from '../interactors/userInteractor';
import { hashPassword } from './authenticationService';
import { IUserEntity } from '../entities/IUserEntity';
import { updateUserDTO } from '../dtos/userDTO';

export const getAll = async (): Promise<IUserEntity[]> => {
  return await UserInteractor.getAll();
};

export const getById = async (id: string): Promise<IUserEntity | null> => {
  return await UserInteractor.getById(id);
};

export const update = async (id: string, userData: updateUserDTO): Promise<IUserEntity> => {
  const preparedUserData: Partial<IUserEntity> = { ...userData };

  if (userData.password) {
    preparedUserData.password = await hashPassword(userData.password);
  }

  return await UserInteractor.update(id, preparedUserData as IUserEntity);
};

export const remove = async (id: string): Promise<IUserEntity | null> => {
  return await UserInteractor.remove(id);
};

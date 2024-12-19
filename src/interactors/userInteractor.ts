import { IUserEntity } from '../entities/IUserEntity';
import * as UserRepository from '../repositories/userRepository';

export const getAll = async (): Promise<IUserEntity[]> => {
  return await UserRepository.getAll();
};

export const getById = async (id: string): Promise<IUserEntity | null> => {
  return await UserRepository.getById(id);
};

export const update = async (id: string, userData: IUserEntity): Promise<IUserEntity> => {
  return await UserRepository.update(id, userData);
};

export const remove = async (id: string): Promise<IUserEntity | null> => {
  return await UserRepository.remove(id);
};
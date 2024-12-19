import { IUserEntity } from '../entities/IUserEntity';
import * as UserRepository from '../repositories/userRepository';

export const create = async (userData: IUserEntity): Promise<IUserEntity> => {
    return await UserRepository.create(userData);
  };

export const getByEmail = async (email: string): Promise<IUserEntity | null> => {
    return await UserRepository.getByEmail(email);
}
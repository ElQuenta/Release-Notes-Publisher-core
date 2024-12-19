import User from '../entities/implements/UserEntity';
import { IUserEntity } from '../entities/IUserEntity';

export const getAll = async (): Promise<IUserEntity[]> => {
  const users = await User.find();
  return users;
};

export const getById = async (id: string): Promise<IUserEntity | null> => {
  const user = await User.findById(id);
  return user;
};

export const create = async (userData: IUserEntity): Promise<IUserEntity> => {
  const user = new User(userData);
  const savedUser = await user.save();
  return savedUser;
};

export const update = async (id: string, userData: Partial<IUserEntity>): Promise<IUserEntity> => {
  const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
  return updatedUser as IUserEntity;
};

export const remove = async (id: string): Promise<IUserEntity | null> => {
  const deletedUser = await User.findByIdAndDelete(id);
  return deletedUser;
};

export const getByEmail = async (email: string): Promise<IUserEntity | null> => {
  try {
    const normalizedEmail = email.toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });
    return user;
  } catch (error) {
    console.error("Error buscando usuario por email:", error);
    throw new Error("Error interno al buscar el usuario");
  }
};


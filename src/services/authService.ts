import * as AuthInteractor from '../interactors/authInteractor';
import * as AuthenticationService from './authenticationService';
import { IUserEntity } from '../entities/IUserEntity';
import { createUserDTO, loginUserDTO } from '../dtos/userDTO';
import { generateToken } from '../utils/jwtUtility';

export const create = async (userData: createUserDTO): Promise<IUserEntity> => {
    const preparedUserData: Partial<IUserEntity> = { ...userData };

    if (userData.password) {
        preparedUserData.password = await AuthenticationService.hashPassword(userData.password);
    }

    return await AuthInteractor.create(preparedUserData as IUserEntity);
};

export const login = async (email: string, password: string): Promise<loginUserDTO> => {
    const user = await AuthInteractor.getByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    const token = generateToken(user.email);

    if (!await AuthenticationService.verifyPassword(password, user.password)) {
        throw new Error('Invalid credentials');
    }
    const userDTO: loginUserDTO = {
        _id: user._id,
        email: user.email,
        username: user.username,
        password: user.password,
        avatarUrl: user.avatarUrl,
        description: user.description,
        token: token,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        __v: user.__v
    };

    return userDTO;
};
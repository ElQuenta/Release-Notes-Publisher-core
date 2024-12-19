import { Types } from "mongoose";

export interface createUserDTO {
    email: string;
    username: string;
    password: string;
    avatarUrl?: string;
    description?: string;
}

export interface updateUserDTO {
    email?: string;
    username?: string;
    password?: string;
    avatarUrl?: string;
    description?: string;
}

export interface loginUserDTO {
    _id: string | Types.ObjectId;
    email: string;
    username: string;
    password: string;
    avatarUrl?: string;
    description?: string;
    token: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
  }
  
  
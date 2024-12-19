import { Types } from "mongoose";

export interface IUserEntity {
    _id: string| Types.ObjectId;
    email: string;
    username: string;
    password: string;
    avatarUrl?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
  }
  
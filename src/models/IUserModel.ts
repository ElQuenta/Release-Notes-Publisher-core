import { Document } from 'mongoose';
import { IUserEntity } from '../entities/IUserEntity';

export interface IUserModel extends Omit<IUserEntity, '_id'>, Document {
    _id: IUserEntity['_id'];
}
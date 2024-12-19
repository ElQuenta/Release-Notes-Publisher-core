import mongoose, { Schema } from 'mongoose';
import { IUserEntity } from '../IUserEntity';
import { IUserModel } from '../../models/IUserModel';


const userSchema: Schema<IUserEntity> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  avatarUrl: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: ""
  }
}, {
  timestamps: true,
});

const User = mongoose.model<IUserModel>('User',userSchema as Schema);

export default User;
import { Types } from 'mongoose';

export enum Role{
  ADMIN = "ADMIN",
  SENDER = "SENDER",
  RECEIVER = "RECEIVER"
}

export interface IAuthProvider{
  provider: "google" | "credentials";
  providerId: string;
};

export enum IsActive{
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED"
};

export interface IUser{
  _id?: Types.ObjectId
  name: string
  email: string
  password?: string
  phone?: string
  picture?: string
  address?: string
  isDeleted?: string
  IsActive?: IsActive
  isVerified?: boolean
  role: Role
  auths: IAuthProvider[]
  createdAt?: Date
}
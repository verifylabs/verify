import { ethers } from 'ethers';
import { Schema } from 'mongoose';

import { database } from '../../database';
import type { Args } from '../core';

type ProfileData = {
  address: string;
  username?: string;
  profilePicture?: string;
};

export interface ProfileItem {
  id: string;
  data: ProfileData;
  signature: string;
  createdAt: Date;
  updatedAt: Date;
}

export type InputProfileData = Args<ProfileData>;

const ProfileDataSchema = new Schema<ProfileData>({
  address: {
    type: String,
    required: true,
    unique: true,
    index: true,
    validate: {
      validator: (v: string) => ethers.utils.isAddress(String(v)),
      message: () => `Address is not valid!`,
    },
  },
  profilePicture: {
    type: String,
  },
  username: {
    type: String,
    index: true,
    minlength: 6,
    match: /^[a-zA-Z0-9-_.]+$/gi,
  },
});

const ProfileSchema = new Schema<ProfileItem>({
  data: ProfileDataSchema,
  signature: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

ProfileSchema.pre('save', function cb(next) {
  this.updatedAt = new Date();
  return next();
});

export const ProfileModel = database.model<ProfileItem>('Profiles', ProfileSchema);

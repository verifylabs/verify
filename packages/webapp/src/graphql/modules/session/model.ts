import { ethers } from 'ethers';
import { Schema } from 'mongoose';

import { database } from '../../database';
import type { Args } from '../core';

export type InputSessionData = Args<SessionData>;

type SessionData = {
  date: string;
  address: string;
};

type SessionToken = {
  id: string;
  token: string;
  data: SessionData;
};

const SessionDataSchema = new Schema<SessionData>({
  address: {
    type: String,
    required: true,
    index: true,
    validate: {
      validator: (v: string) => ethers.utils.isAddress(String(v)),
      message: () => `Address is not valid!`,
    },
  },
  date: {
    type: String,
    required: true,
  },
});

const SessionSchema = new Schema<SessionToken>({
  token: { type: String },
  data: SessionDataSchema,
});

export const SessionModel = database.model<SessionToken>('Sessions', SessionSchema);

import { ethers } from 'ethers';
import { Schema } from 'mongoose';
import { database } from '~/graphql/database';

import type { Args } from '../core';

export type InputLinkData = Args<LinkData>;

type LinkData = {
  redirect: string;
  address: string;
  short: string;
};

export type OpenGraphData = {
  title: string;
  description: string;
  image: string;
};

interface LinkItem {
  id: string;
  data: LinkData;
  signature: string;
  createdAt: Date;
}

const LinkDataSchema = new Schema<LinkData>({
  address: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => ethers.utils.isAddress(String(v)),
      message: () => `Address is not valid!`,
    },
  },
  redirect: {
    type: String,
    required: true,
    index: true,
    match:
      // eslint-disable-next-line no-useless-escape
      /^(https|ipfs):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  },
  short: {
    type: String,
    required: true,
    index: true,
    unique: true,
    minlength: 6,
    match: /^[a-zA-Z0-9]+$/gi,
  },
});

const LinkSchema = new Schema<LinkItem>({
  data: LinkDataSchema,
  signature: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export const LinkModel = database.model<LinkItem>('Links', LinkSchema);

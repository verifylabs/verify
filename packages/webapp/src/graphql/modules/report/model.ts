import { Schema } from 'mongoose';

import { database } from '../../database';
import type { Args } from '../core';

export type InputReportData = Args<ReportData>;

export enum ReportType {
  SCAM = 'SCAM',
}

type ReportData = {
  url: string;
  short: string;
  type: ReportType;
};

interface ReportItem {
  id: string;
  data: ReportData;
  signature: string;
  createdAt: Date;
}

const ReportDataSchema = new Schema<ReportData>({
  short: {
    type: String,
    index: true,
    minlength: 6,
    match: /^[a-zA-Z0-9]+$/gi,
  },
  url: {
    type: String,
    index: true,
    match:
      // eslint-disable-next-line no-useless-escape
      /^(https|ipfs):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  },
  type: {
    type: String,
    required: true,
    enum: [ReportType.SCAM],
  },
});

const ReportSchema = new Schema<ReportItem>({
  data: ReportDataSchema,
  signature: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export const ReportModel = database.model<ReportItem>('Reports', ReportSchema);

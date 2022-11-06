/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';

import { SessionModel } from '../model';

const { JWT_SECRET } = process.env;

export async function getSessionByToken(token?: string | null) {
  if (!token) return null;
  const decoded: any = jwt.verify(token as string, JWT_SECRET as string);
  const session = await SessionModel.findOne({ _id: decoded.id });
  return session;
}

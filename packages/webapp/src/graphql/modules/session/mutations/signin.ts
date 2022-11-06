import { setCookie } from 'cookies-next';
import { randomUUID } from 'crypto';
import dayjs from 'dayjs';
import { verifyMessage } from 'ethers/lib/utils';
import jwt from 'jsonwebtoken';
import * as nx from 'nexus';

import { sortKeys } from '../../../utils';
import { createProfile } from '../../profiles/services';
import { SESSION_KEY } from '../constants';
import type { InputSessionData } from '../model';
import { SessionModel } from '../model';

const { JWT_SECRET } = process.env;
const ONE_MIN = 1000 * 60;
const WINDOW_TIME = ONE_MIN * 10;
const EXPIRES_IN = ONE_MIN * 60 * 24;

const SessionData = nx.objectType({
  name: 'SessionData',
  definition(t) {
    t.string('date');
    t.string('address');
  },
});

export const SessionPayload = nx.objectType({
  name: 'SessionPayload',
  definition(t) {
    t.string('token');
    t.field('data', { type: SessionData });
  },
});

export const SignInMutation = nx.mutationField('signin', {
  type: SessionPayload,
  args: {
    input: nx.nonNull('DataInput'),
  },
  async resolve(_parent, { input }: InputSessionData, ctx) {
    const data = input.data;
    const signature = input.signature;
    const message = JSON.stringify(sortKeys(data));
    const address = verifyMessage(message, signature);

    if (data.address !== address) {
      throw new Error('Signature is not valid!');
    }

    const currentDate = +new Date();
    const signatureDate = +new Date(input.data.date);

    if (signatureDate <= currentDate - WINDOW_TIME || signatureDate >= currentDate + WINDOW_TIME) {
      throw new Error('Signature date is invalid!');
    }

    const session = await SessionModel.create({ token: randomUUID(), data });
    const token = jwt.sign({ id: session._id }, JWT_SECRET as string, {
      expiresIn: EXPIRES_IN,
    });

    await createProfile({
      input: {
        data,
        signature,
      },
    });

    setCookie(SESSION_KEY, token, {
      ...ctx,
      expires: dayjs().add(1, 'hour').toDate(),
      httpOnly: true,
      domain: process.env.VERCEL_URL || 'localhost',
    });

    return { token };
  },
});

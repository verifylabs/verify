import * as nx from 'nexus';

import { SessionPayload } from '../mutations';
import { getSessionByToken } from '../services';

export const SessionQuery = nx.queryField('session', {
  type: SessionPayload,
  args: {
    token: nx.stringArg(),
  },
  async resolve(_parent, args, ctx) {
    const token = (ctx.req.headers['x-session-token'] as string) || args.token;
    if (!token) return { token: null };

    try {
      const session = await getSessionByToken(token);
      return { token: session?.token ?? null, data: session?.data ?? null };
    } catch {
      throw new Error('Invalid session!');
    }
  },
});

import { deleteCookie } from 'cookies-next';
import * as nx from 'nexus';

import { SESSION_KEY } from '../constants';

import { SessionPayload } from './signin';

export const SignOutMutation = nx.mutationField('signout', {
  type: SessionPayload,
  async resolve(_parent, _args, ctx) {
    deleteCookie(SESSION_KEY, ctx);
    return { token: null };
  },
});

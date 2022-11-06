import * as nx from 'nexus';

import type { InputProfileData } from '../model';
import { createProfile } from '../services/createProfile';

export const UpsertProfileMutation = nx.mutationField('profile', {
  type: nx.nonNull('Profile'),
  args: {
    input: nx.nonNull('DataInput'),
  },
  async resolve(_parent, { input }: InputProfileData) {
    return createProfile({ input });
  },
});

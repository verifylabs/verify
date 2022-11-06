import * as nx from 'nexus';

import { ProfileModel } from '../model';

export const ProfileQuery = nx.queryField('profile', {
  type: 'Profile',
  args: {
    address: nx.stringArg(),
    username: nx.stringArg(),
  },
  async resolve(_parent, { username, address }) {
    return ProfileModel.findOne({
      $or: [{ 'data.address': address }, { 'data.username': username }],
    });
  },
});

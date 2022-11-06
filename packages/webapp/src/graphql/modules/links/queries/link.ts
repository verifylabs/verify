import * as nx from 'nexus';

import { LinkModel } from '../model';

export const LinkQuery = nx.queryField('link', {
  type: 'Link',
  args: {
    short: nx.nonNull('String'),
  },
  async resolve(_parent, { short }) {
    return LinkModel.findOne({ 'data.short': short });
  },
});

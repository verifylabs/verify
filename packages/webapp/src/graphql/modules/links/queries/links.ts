import * as nx from 'nexus';

import { LinkModel } from '../model';

export const LinksQuery = nx.queryField('links', {
  type: nx.nonNull(nx.list(nx.nonNull('Link'))),
  args: {
    address: nx.stringArg(),
  },
  async resolve(_parent, args) {
    const address = args.address;
    return LinkModel.find({ 'data.address': address }).sort({ createdAt: 'desc' });
  },
});

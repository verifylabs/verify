import * as nx from 'nexus';

import { LinkModel } from '../model';

export const SearchLinksQuery = nx.queryField('searchLinks', {
  type: nx.nonNull(nx.list(nx.nonNull('Link'))),
  args: {
    redirect: 'String',
  },
  async resolve(_parent, { redirect }) {
    return LinkModel.find({ redirect });
  },
});

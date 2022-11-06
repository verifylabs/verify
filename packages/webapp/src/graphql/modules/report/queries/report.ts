import * as nx from 'nexus';

import { ReportModel } from '../model';

export const ReportInfoQuery = nx.queryField('reportInfo', {
  type: 'ReportInfo',
  args: {
    short: 'String',
    url: 'String',
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async resolve(_parent, { short, url }: any) {
    if (!short && !url) {
      throw new Error('Require short or url to search report info');
    }
    const reports = await ReportModel.count({
      $or: [{ 'data.url': url }, { 'data.short': short }],
    });

    return {
      reports,
    };
  },
});

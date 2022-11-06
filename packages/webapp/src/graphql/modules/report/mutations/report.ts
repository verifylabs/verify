import { verifyMessage } from 'ethers/lib/utils';
import * as nx from 'nexus';

import { sortKeys } from '../../../utils';
import type { InputReportData } from '../model';
import { ReportModel } from '../model';

export const ReportMutation = nx.mutationField('report', {
  type: 'ReportInfo',
  args: {
    input: nx.nonNull('DataInput'),
  },
  async resolve(_parent, { input }: InputReportData) {
    const data = input.data;
    const signature = input.signature;
    const message = JSON.stringify(sortKeys(data));

    // Validate message
    verifyMessage(message, signature);

    if (!data.short && !data.url) {
      throw new Error('Require short or url to report a scam');
    }

    await ReportModel.create({
      data,
      signature,
    });

    const reports = await ReportModel.count({
      $or: [{ 'data.url': data.url }, { 'data.short': data.short }],
    });

    return {
      reports,
    };
  },
});

import { verifyMessage } from 'ethers/lib/utils';
import * as nx from 'nexus';

import { sortKeys } from '../../../utils';
import type { InputLinkData } from '../model';
import { LinkModel } from '../model';

export const CreateOneLinkMutation = nx.mutationField('createLink', {
  type: nx.nonNull('Link'),
  args: {
    input: nx.nonNull('DataInput'),
  },
  async resolve(_parent, { input }: InputLinkData) {
    const data = input.data;
    const signature = input.signature;
    const message = JSON.stringify(sortKeys(data));
    const address = verifyMessage(message, signature);

    if (data.address !== address) {
      throw new Error('Signature is not valid!');
    }

    return LinkModel.create({
      data,
      signature,
    });
  },
});

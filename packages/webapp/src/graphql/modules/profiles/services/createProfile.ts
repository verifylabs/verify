import { verifyMessage } from 'ethers/lib/utils';
import { sortKeys } from '~/graphql/utils';

import type { InputProfileData } from '../model';
import { ProfileModel } from '../model';

export async function createProfile({ input }: InputProfileData) {
  const data = input.data;
  const signature = input.signature;
  const message = JSON.stringify(sortKeys(data));
  const address = verifyMessage(message, signature);

  if (data.address !== address) {
    throw new Error('Signature is not valid!');
  }

  let profile = await ProfileModel.findOne({ 'data.address': address });

  if (!profile) {
    profile = await ProfileModel.create({ data, signature });
  } else {
    profile.data = data;
    profile.signature = signature;
    await profile.save();
  }

  return profile;
}

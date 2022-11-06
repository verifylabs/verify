import * as helpers from '@nomicfoundation/hardhat-network-helpers';
import { task } from 'hardhat/config';

task('faucet')
  .addParam('account', 'The account address')
  .setAction(async (taskArg, { ethers }) => {
    await helpers.impersonateAccount(taskArg.account);
    await helpers.setBalance(taskArg.account, 100n ** 18n);
    const balance = await ethers.provider.getBalance(taskArg.account);
    console.log('balance', balance);
  });

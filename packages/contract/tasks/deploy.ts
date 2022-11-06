import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { task } from 'hardhat/config';

task('deploy:Verify').setAction(async (_, { ethers }) => {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const verifyFactory = await ethers.getContractFactory('Verify');
  const verify = await verifyFactory.connect(signers[0]).deploy();
  await verify.deployed();
  console.log('Verify deployed to: ', verify.address);
});

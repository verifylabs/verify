import { task } from 'hardhat/config';
import type { HardhatRuntimeEnvironment } from 'hardhat/types';

task('deploy:Verify').setAction(async (_, hre: HardhatRuntimeEnvironment) => {
  const { ethers } = hre;
  const signer = (await ethers.getSigners())[0];
  const verifyFactory = await ethers.getContractFactory('Verify');
  const verify = await verifyFactory.connect(signer).deploy(signer.address);
  await verify.deployed();

  console.log('Verify deployed to: ', verify.address);
});

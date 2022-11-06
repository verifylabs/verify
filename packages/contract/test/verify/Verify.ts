import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import type { Contract } from 'ethers';
import { hexDataSlice } from 'ethers/lib/utils';
import { ethers } from 'hardhat';

describe('Verify contract', () => {
  async function deployVerifyFixture() {
    const Verify = await ethers.getContractFactory('Verify');
    const [owner, addr1, addr2] = await ethers.getSigners();
    const verify = await Verify.deploy();
    await verify.deployed();
    return { Verify, verify, owner, addr1, addr2 };
  }

  async function createContent(verify: Contract) {
    const data = JSON.stringify({ hello: 'world' });
    const id = '123';
    const tx = await verify.createContent(data, id);
    await tx.wait();
    const decodedData = ethers.utils.defaultAbiCoder.decode(
      ['string', 'string', 'address', 'uint256'],
      hexDataSlice(tx.data, 4)
    );
    return {
      data: decodedData[0],
      id: decodedData[1],
      address: decodedData[2],
      timestamp: decodedData[3],
    };
  }

  describe('Deployment', () => {
    it('should create a content', async () => {
      const { verify } = await loadFixture(deployVerifyFixture);
      const content = await createContent(verify);
      expect(content.id).to.equal('123');
    });

    it('should create a report', async () => {
      const { verify } = await loadFixture(deployVerifyFixture);
      const content = await createContent(verify);
      const res1 = await verify.getReports(content.id);
      expect(res1.toString()).to.equal('0');
      const tx = await verify.createReport(content.id);
      await tx.wait();
      const res2 = await verify.getReports(content.id);
      expect(res2.toString()).to.equal('1');
    });
  });
});

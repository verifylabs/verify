import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import { config as dotenvConfig } from 'dotenv';
import type { HardhatUserConfig } from 'hardhat/config';
import { resolve } from 'path';

import './tasks/deploy';

dotenvConfig({ path: resolve(__dirname, '.env') });

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/hardhat-template/issues/31
        bytecodeHash: 'none',
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: 'https://eth-mainnet.g.alchemy.com/v2/37CgCluiS0enLCQHnV1nYZ5tN07m-ZK2',
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    enabled: !!process.env.REPORT_GAS,
    excludeContracts: [],
    src: './contracts',
  },
  typechain: {
    outDir: './types',
    target: 'ethers-v5',
  },
};

export default config;

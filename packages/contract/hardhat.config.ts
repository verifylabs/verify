import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import { config as dotenvConfig } from 'dotenv';
import type { HardhatUserConfig } from 'hardhat/config';
import { resolve } from 'path';

import './tasks/deploy';

dotenvConfig({ path: resolve(__dirname, '.env') });

const CHAIN_IDS = {
  'arbitrum-mainnet': 42161,
  avalanche: 43114,
  bsc: 56,
  hardhat: 31337,
  mainnet: 1,
  'optimism-mainnet': 10,
  'polygon-mainnet': 137,
  'polygon-mumbai': 80001,
  sepolia: 11155111,
};

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
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
        url: 'https://eth-mainnet.alchemyapi.io/v2/37CgCluiS0enLCQHnV1nYZ5tN07m-ZK2',
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

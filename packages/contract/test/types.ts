import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';

import type { Verify } from '../types/Verify';

type Fixture<T> = () => Promise<T>;

declare module 'mocha' {
  export interface Context {
    verify: Verify;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}

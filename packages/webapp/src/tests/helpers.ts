import { ApolloServer } from 'apollo-server-micro';
import { Wallet } from 'ethers';
import { createMocks } from 'node-mocks-http';
import { schema } from '~/graphql/schema';
import { sortKeys } from '~/graphql/utils';

export function getWallet() {
  const privateKey = '0xfb2f62dea0241feab8d84553c27854cc8017461784fda7bed57ece87da9b462b';
  const wallet = new Wallet(privateKey);
  return wallet;
}

export function createGQLTestServer() {
  return new ApolloServer({
    schema,
    context: () => {
      const ctx = createMocks({ method: 'POST' });
      ctx.req.headers = {
        'Content-Type': 'application/json',
      };
      return ctx;
    },
    formatError(error) {
      // eslint-disable-next-line no-console
      console.log(error);
      throw error;
    },
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signJSON(data: any, wallet?: Wallet) {
  const message = JSON.stringify(sortKeys(data));
  const w = wallet || getWallet();
  const signature = await w.signMessage(message);

  return signature;
}

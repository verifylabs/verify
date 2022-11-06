import { gql } from '@apollo/client';
import { Wallet } from 'ethers';
import { database } from '~/graphql/database';
import { createGQLTestServer, signJSON } from '~/tests/helpers';

const server = createGQLTestServer();

describe('Session', () => {
  afterAll(async () => {
    await database.close();
  });

  const wallet = Wallet.createRandom();
  it('Create session', async () => {
    const data = {
      address: wallet.address,
      date: new Date(),
    };
    const signature = await signJSON(data, wallet);
    const { data: mutationRes } = await server.executeOperation({
      query: gql`
        mutation ($input: DataInput!) {
          signin(input: $input) {
            token
          }
        }
      `,
      variables: {
        input: {
          data,
          signature,
        },
      },
    });

    const token = mutationRes?.signin.token;
    expect(mutationRes?.errors).toBeUndefined();
    expect(token).toBeDefined();

    const { data: res } = await server.executeOperation({
      query: gql`
        query ($token: String) {
          session(token: $token) {
            token
          }
        }
      `,
      variables: {
        token,
      },
    });

    expect(res?.errors).toBeUndefined();
    expect(res?.session.token).toBeDefined();
  });

  it('Failure to create session', async () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 10);
    const data = {
      address: wallet.address,
      date,
    };
    const signature = await signJSON(data, wallet);
    const response = await server.executeOperation({
      query: gql`
        mutation ($input: DataInput!) {
          signin(input: $input) {
            token
          }
        }
      `,
      variables: {
        input: {
          data,
          signature,
        },
      },
    });

    expect(response.errors).toBeDefined();
  });
});

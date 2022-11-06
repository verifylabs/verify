import { gql } from '@apollo/client';
import { randomBytes } from 'crypto';
import { Wallet } from 'ethers';
import { database } from '~/graphql/database';
import { createGQLTestServer, signJSON } from '~/tests/helpers';

const server = createGQLTestServer();

function generateUsername() {
  const random = randomBytes(6);
  return random.toString('hex');
}

describe('Profiles', () => {
  const username = generateUsername();
  const wallet = Wallet.createRandom();

  afterAll(async () => {
    await database.close();
  });

  it('Create profile', async () => {
    const data = {
      address: wallet.address,
      username,
    };
    const signature = await signJSON(data, wallet);
    const { data: res } = await server.executeOperation({
      query: gql`
        mutation ($input: DataInput!) {
          profile(input: $input) {
            id
            data {
              address
              username
            }
            signature
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
    expect(res?.profile.id).toBeTruthy();
    expect(res?.profile.signature).toBe(signature);
    expect(res?.profile.data).toEqual(data);
    expect(res?.profile.data.username).toBe(username);
  });

  it('Can retrieve profile', async () => {
    const { data: res } = await server.executeOperation({
      query: gql`
        query ($username: String!) {
          profile(username: $username) {
            id
            data {
              username
            }
          }
        }
      `,
      variables: {
        username,
      },
    });
    expect(res?.profile.data.username).toBe(username);
  });

  it('Update profile', async () => {
    const username = generateUsername();
    const data = {
      address: wallet.address,
      username,
    };

    const signature = await signJSON(data, wallet);
    const { data: res } = await server.executeOperation({
      query: gql`
        mutation ($input: DataInput!) {
          profile(input: $input) {
            id
            data {
              address
              username
            }
            signature
            createdAt
            updatedAt
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

    expect(res?.profile.id).toBeTruthy();
    expect(res?.profile.signature).toBe(signature);
    expect(res?.profile.data).toEqual(data);
    expect(res?.profile.data.username).toBe(username);
  });
});

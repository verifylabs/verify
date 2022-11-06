import { gql } from '@apollo/client';
import { randomBytes } from 'crypto';
import { database } from '~/graphql/database';
import { getWallet, createGQLTestServer, signJSON } from '~/tests/helpers';

const server = createGQLTestServer();
const wallet = getWallet();

function generateLink() {
  const random = randomBytes(6);
  return random.toString('hex');
}

describe('Links', () => {
  const short = generateLink();
  const redirect = 'https://www.foo.com/';

  afterAll(async () => {
    await database.close();
  });

  it('Create link', async () => {
    const data = {
      address: wallet.address,
      redirect,
      short,
    };
    const signature = await signJSON(data);
    const { data: res } = await server.executeOperation({
      query: gql`
        mutation ($input: DataInput!) {
          createLink(input: $input) {
            id
            data {
              address
              redirect
              short
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
    expect(res?.createLink.id).toBeTruthy();
    expect(res?.createLink.signature).toBe(signature);
    expect(res?.createLink.data).toEqual(data);
    expect(res?.createLink.data.short).toBe(short);
  });

  it('Can list all links', async () => {
    // Create a new draft
    const { data: res } = await server.executeOperation({
      query: gql`
        query ($address: String!) {
          links(address: $address) {
            id
          }
        }
      `,
      variables: {
        address: wallet.address,
      },
    });
    expect(res?.links.length).toBeGreaterThanOrEqual(1);
  });

  it('Can get one link', async () => {
    // Create a new draft
    const { data: res } = await server.executeOperation({
      query: gql`
        query ($short: String!) {
          link(short: $short) {
            id
            data {
              short
            }
          }
        }
      `,
      variables: {
        short,
      },
    });
    expect(res?.link.data.short).toBe(short);
  });

  it('Search by redirect link', async () => {
    // Create a new draft
    const { data: res } = await server.executeOperation({
      query: gql`
        query ($redirect: String!) {
          searchLinks(redirect: $redirect) {
            id
          }
        }
      `,
      variables: {
        redirect,
      },
    });
    expect(res?.searchLinks.length).toBeGreaterThanOrEqual(1);
  });
});

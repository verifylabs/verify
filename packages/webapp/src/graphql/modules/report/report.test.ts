import { gql } from '@apollo/client';
import { Wallet } from 'ethers';
import { database } from '~/graphql/database';
import { createGQLTestServer, signJSON } from '~/tests/helpers';

const server = createGQLTestServer();
const url = 'https://foo.bar';

describe('Report', () => {
  afterAll(async () => {
    await database.close();
  });

  it('Create report', async () => {
    const wallet = Wallet.createRandom();
    const data = {
      url,
      type: 'SCAM',
    };
    const signature = await signJSON(data, wallet);
    const { data: res } = await server.executeOperation({
      query: gql`
        mutation ($input: DataInput!) {
          report(input: $input) {
            reports
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
    expect(res?.report.reports).toBeGreaterThanOrEqual(1);
  });

  it('Query report info', async () => {
    const { data: res } = await server.executeOperation({
      query: gql`
        query ($url: String) {
          reportInfo(url: $url) {
            reports
          }
        }
      `,
      variables: {
        url,
      },
    });
    expect(res?.reportInfo.reports).toBeGreaterThanOrEqual(1);
  });
});

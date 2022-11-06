import type { GetServerSidePropsContext } from 'next';
import type { ProfileQuery, SessionQuery } from '~/generated/graphql';
import { ProfileDocument, SessionDocument } from '~/generated/graphql';
import { initApollo } from '~/systems/Core';

export async function withSessionProps(ctx: GetServerSidePropsContext) {
  const client = initApollo(null, ctx);
  const { data: sessionData } = await client.query<SessionQuery>({ query: SessionDocument });
  const address = sessionData.session?.data?.address;
  const { data: profileData } = await client.query<ProfileQuery>({
    query: ProfileDocument,
    variables: { address },
  });
  return {
    props: {
      session: sessionData?.session,
      profile: profileData.profile,
    },
  };
}

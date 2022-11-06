/* eslint-disable no-console */
import { ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';

import { createContext } from '~/graphql/context';
import { schema } from '~/graphql/schema';
import { runMiddleware } from '~/graphql/utils';

const server = new ApolloServer({
  schema,
  context: createContext,
  formatError(error) {
    console.log(error);
    console.log(error.toJSON());
    return error;
  },
  plugins: [
    ...(process.env.NODE_ENV === 'production' ? [ApolloServerPluginLandingPageDisabled()] : []),
  ],
});

const start = server.start();
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  await start;
  return server.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

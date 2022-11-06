import { GraphQLDateTime } from 'graphql-iso-date';
import * as nx from 'nexus';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DateTimeScalar = nx.asNexusMethod(GraphQLDateTime as any, 'datetime');
export const JSONScalar = nx.scalarType({
  name: 'JSON',
  asNexusMethod: 'json',
});

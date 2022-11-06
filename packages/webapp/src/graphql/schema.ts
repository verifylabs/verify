import { makeSchema } from 'nexus';
import { resolve } from 'path';

import * as types from './modules';

function resolvePath(path: string) {
  return resolve(process.cwd(), path);
}

export const schema = makeSchema({
  types,
  nonNullDefaults: {
    input: false,
    output: false,
  },
  outputs: {
    schema: resolvePath('./src/generated/schema.graphql'),
    typegen: resolvePath('./src/generated/nexus.ts'),
  },
  contextType: {
    export: 'Context',
    module: resolvePath('./src/graphql/context.ts'),
  },
  prettierConfig: resolvePath('../../.prettierrc'),
});

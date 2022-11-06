import * as nx from 'nexus';

import { opengraph } from './services/opengraph';

export const LinkData = nx.objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'LinkData',
  definition(t) {
    t.nonNull.string('short');
    t.nonNull.string('redirect');
    t.nonNull.string('address');
  },
});

export const OpenGraph = nx.objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OpenGraph',
  definition(t) {
    t.nonNull.string('title');
    t.nonNull.string('description');
    t.nonNull.json('image');
  },
});

export const Link = nx.objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Link',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('signature');
    t.nonNull.datetime('createdAt');
    t.nonNull.field('data', { type: LinkData });
    t.nullable.field('openGraph', {
      type: 'OpenGraph',
      async resolve(root, _args) {
        try {
          return await opengraph(root.data.redirect);
        } catch (err) {
          return null;
        }
      },
    });
  },
});

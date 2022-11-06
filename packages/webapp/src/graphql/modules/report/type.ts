import * as nx from 'nexus';

export const ReportData = nx.objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ReportData',
  definition(t) {
    t.string('short');
    t.string('url');
  },
});

export const Report = nx.objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Report',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.field('data', { type: ReportData });
    t.nonNull.string('signature');
    t.nonNull.datetime('createdAt');
  },
});

export const ReportInfo = nx.objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ReportInfo',
  definition(t) {
    t.nonNull.int('reports');
  },
});

import * as nx from 'nexus';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DataInputItem<T = any> {
  data: T;
  signature: string;
}

export interface Args<T> {
  input: DataInputItem<T>;
}

export const DataInput = nx.inputObjectType({
  name: 'DataInput',
  definition(t) {
    t.nonNull.json('data');
    t.nonNull.string('signature');
  },
});

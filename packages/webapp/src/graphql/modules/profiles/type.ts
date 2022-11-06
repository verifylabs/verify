import * as nx from 'nexus';

export const ProfileData = nx.objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ProfileData',
  definition(t) {
    t.nullable.string('username');
    t.nullable.string('profilePicture');
    t.nonNull.string('address');
  },
});

export const Profile = nx.objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Profile',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.field('data', { type: ProfileData });
    t.nonNull.string('signature');
    t.nonNull.datetime('createdAt');
    t.datetime('updatedAt');
  },
});

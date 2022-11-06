import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type DataInput = {
  data: Scalars["JSON"];
  signature: Scalars["String"];
};

export type Link = {
  __typename?: "Link";
  createdAt: Scalars["DateTime"];
  data: LinkData;
  id: Scalars["String"];
  openGraph: Maybe<OpenGraph>;
  signature: Scalars["String"];
};

export type LinkData = {
  __typename?: "LinkData";
  address: Scalars["String"];
  redirect: Scalars["String"];
  short: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createLink: Link;
  profile: Profile;
  report: Maybe<ReportInfo>;
  signin: Maybe<SessionPayload>;
  signout: Maybe<SessionPayload>;
};

export type MutationCreateLinkArgs = {
  input: DataInput;
};

export type MutationProfileArgs = {
  input: DataInput;
};

export type MutationReportArgs = {
  input: DataInput;
};

export type MutationSigninArgs = {
  input: DataInput;
};

export type OpenGraph = {
  __typename?: "OpenGraph";
  description: Scalars["String"];
  image: Scalars["JSON"];
  title: Scalars["String"];
};

export type Profile = {
  __typename?: "Profile";
  createdAt: Scalars["DateTime"];
  data: ProfileData;
  id: Scalars["String"];
  signature: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ProfileData = {
  __typename?: "ProfileData";
  address: Scalars["String"];
  profilePicture: Maybe<Scalars["String"]>;
  username: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  link: Maybe<Link>;
  links: Array<Link>;
  profile: Maybe<Profile>;
  reportInfo: Maybe<ReportInfo>;
  searchLinks: Array<Link>;
  session: Maybe<SessionPayload>;
};

export type QueryLinkArgs = {
  short: Scalars["String"];
};

export type QueryLinksArgs = {
  address: InputMaybe<Scalars["String"]>;
};

export type QueryProfileArgs = {
  address: InputMaybe<Scalars["String"]>;
  username: InputMaybe<Scalars["String"]>;
};

export type QueryReportInfoArgs = {
  short: InputMaybe<Scalars["String"]>;
  url: InputMaybe<Scalars["String"]>;
};

export type QuerySearchLinksArgs = {
  redirect: InputMaybe<Scalars["String"]>;
};

export type QuerySessionArgs = {
  token: InputMaybe<Scalars["String"]>;
};

export type Report = {
  __typename?: "Report";
  createdAt: Scalars["DateTime"];
  data: ReportData;
  id: Scalars["String"];
  signature: Scalars["String"];
};

export type ReportData = {
  __typename?: "ReportData";
  short: Scalars["String"];
  url: Scalars["String"];
};

export type ReportInfo = {
  __typename?: "ReportInfo";
  reports: Scalars["Int"];
};

export type SessionData = {
  __typename?: "SessionData";
  address: Maybe<Scalars["String"]>;
  date: Maybe<Scalars["String"]>;
};

export type SessionPayload = {
  __typename?: "SessionPayload";
  data: Maybe<SessionData>;
  token: Maybe<Scalars["String"]>;
};

export type CreateLinkMutationVariables = Exact<{
  input: DataInput;
}>;

export type CreateLinkMutation = {
  __typename?: "Mutation";
  createLink: {
    __typename?: "Link";
    id: string;
    signature: string;
    createdAt: any;
    data: {
      __typename?: "LinkData";
      address: string;
      redirect: string;
      short: string;
    };
    openGraph: {
      __typename?: "OpenGraph";
      title: string;
      description: string;
      image: any;
    } | null;
  };
};

export type LinkItemFragment = {
  __typename?: "Link";
  id: string;
  signature: string;
  createdAt: any;
  data: {
    __typename?: "LinkData";
    address: string;
    redirect: string;
    short: string;
  };
  openGraph: {
    __typename?: "OpenGraph";
    title: string;
    description: string;
    image: any;
  } | null;
};

export type LinksQueryVariables = Exact<{
  address: InputMaybe<Scalars["String"]>;
}>;

export type LinksQuery = {
  __typename?: "Query";
  links: Array<{
    __typename?: "Link";
    id: string;
    signature: string;
    createdAt: any;
    data: {
      __typename?: "LinkData";
      address: string;
      redirect: string;
      short: string;
    };
    openGraph: {
      __typename?: "OpenGraph";
      title: string;
      description: string;
      image: any;
    } | null;
  }>;
};

export type UpsertProfileMutationVariables = Exact<{
  input: DataInput;
}>;

export type UpsertProfileMutation = {
  __typename?: "Mutation";
  profile: {
    __typename?: "Profile";
    id: string;
    createdAt: any;
    updatedAt: any;
    data: {
      __typename?: "ProfileData";
      address: string;
      username: string | null;
      profilePicture: string | null;
    };
  };
};

export type ProfileItemFragment = {
  __typename?: "Profile";
  id: string;
  createdAt: any;
  updatedAt: any;
  data: {
    __typename?: "ProfileData";
    address: string;
    username: string | null;
    profilePicture: string | null;
  };
};

export type ProfileQueryVariables = Exact<{
  address: InputMaybe<Scalars["String"]>;
}>;

export type ProfileQuery = {
  __typename?: "Query";
  profile: {
    __typename?: "Profile";
    id: string;
    createdAt: any;
    updatedAt: any;
    data: {
      __typename?: "ProfileData";
      address: string;
      username: string | null;
      profilePicture: string | null;
    };
  } | null;
};

export type SignInMutationVariables = Exact<{
  input: DataInput;
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  signin: {
    __typename?: "SessionPayload";
    token: string | null;
    data: {
      __typename?: "SessionData";
      date: string | null;
      address: string | null;
    } | null;
  } | null;
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = {
  __typename?: "Mutation";
  signout: {
    __typename?: "SessionPayload";
    token: string | null;
    data: {
      __typename?: "SessionData";
      date: string | null;
      address: string | null;
    } | null;
  } | null;
};

export type SessionItemFragment = {
  __typename?: "SessionPayload";
  token: string | null;
  data: {
    __typename?: "SessionData";
    date: string | null;
    address: string | null;
  } | null;
};

export type SessionQueryVariables = Exact<{ [key: string]: never }>;

export type SessionQuery = {
  __typename?: "Query";
  session: {
    __typename?: "SessionPayload";
    token: string | null;
    data: {
      __typename?: "SessionData";
      date: string | null;
      address: string | null;
    } | null;
  } | null;
};

export const LinkItemFragmentDoc = gql`
  fragment LinkItem on Link {
    id
    signature
    createdAt
    data {
      address
      redirect
      short
    }
    openGraph {
      title
      description
      image
    }
  }
`;
export const ProfileItemFragmentDoc = gql`
  fragment ProfileItem on Profile {
    id
    createdAt
    updatedAt
    data {
      address
      username
      profilePicture
    }
  }
`;
export const SessionItemFragmentDoc = gql`
  fragment SessionItem on SessionPayload {
    token
    data {
      date
      address
    }
  }
`;
export const CreateLinkDocument = gql`
  mutation CreateLink($input: DataInput!) {
    createLink(input: $input) {
      ...LinkItem
    }
  }
  ${LinkItemFragmentDoc}
`;
export type CreateLinkMutationFn = Apollo.MutationFunction<
  CreateLinkMutation,
  CreateLinkMutationVariables
>;

/**
 * __useCreateLinkMutation__
 *
 * To run a mutation, you first call `useCreateLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLinkMutation, { data, loading, error }] = useCreateLinkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLinkMutation,
    CreateLinkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateLinkMutation, CreateLinkMutationVariables>(
    CreateLinkDocument,
    options
  );
}
export type CreateLinkMutationHookResult = ReturnType<
  typeof useCreateLinkMutation
>;
export type CreateLinkMutationResult =
  Apollo.MutationResult<CreateLinkMutation>;
export type CreateLinkMutationOptions = Apollo.BaseMutationOptions<
  CreateLinkMutation,
  CreateLinkMutationVariables
>;
export const LinksDocument = gql`
  query Links($address: String) {
    links(address: $address) {
      ...LinkItem
    }
  }
  ${LinkItemFragmentDoc}
`;

/**
 * __useLinksQuery__
 *
 * To run a query within a React component, call `useLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLinksQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useLinksQuery(
  baseOptions?: Apollo.QueryHookOptions<LinksQuery, LinksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LinksQuery, LinksQueryVariables>(
    LinksDocument,
    options
  );
}
export function useLinksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LinksQuery, LinksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LinksQuery, LinksQueryVariables>(
    LinksDocument,
    options
  );
}
export type LinksQueryHookResult = ReturnType<typeof useLinksQuery>;
export type LinksLazyQueryHookResult = ReturnType<typeof useLinksLazyQuery>;
export type LinksQueryResult = Apollo.QueryResult<
  LinksQuery,
  LinksQueryVariables
>;
export const UpsertProfileDocument = gql`
  mutation UpsertProfile($input: DataInput!) {
    profile(input: $input) {
      ...ProfileItem
    }
  }
  ${ProfileItemFragmentDoc}
`;
export type UpsertProfileMutationFn = Apollo.MutationFunction<
  UpsertProfileMutation,
  UpsertProfileMutationVariables
>;

/**
 * __useUpsertProfileMutation__
 *
 * To run a mutation, you first call `useUpsertProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertProfileMutation, { data, loading, error }] = useUpsertProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertProfileMutation,
    UpsertProfileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertProfileMutation,
    UpsertProfileMutationVariables
  >(UpsertProfileDocument, options);
}
export type UpsertProfileMutationHookResult = ReturnType<
  typeof useUpsertProfileMutation
>;
export type UpsertProfileMutationResult =
  Apollo.MutationResult<UpsertProfileMutation>;
export type UpsertProfileMutationOptions = Apollo.BaseMutationOptions<
  UpsertProfileMutation,
  UpsertProfileMutationVariables
>;
export const ProfileDocument = gql`
  query Profile($address: String) {
    profile(address: $address) {
      ...ProfileItem
    }
  }
  ${ProfileItemFragmentDoc}
`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(
    ProfileDocument,
    options
  );
}
export function useProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(
    ProfileDocument,
    options
  );
}
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<
  ProfileQuery,
  ProfileQueryVariables
>;
export const SignInDocument = gql`
  mutation SignIn($input: DataInput!) {
    signin(input: $input) {
      ...SessionItem
    }
  }
  ${SessionItemFragmentDoc}
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignOutDocument = gql`
  mutation SignOut {
    signout {
      ...SessionItem
    }
  }
  ${SessionItemFragmentDoc}
`;
export type SignOutMutationFn = Apollo.MutationFunction<
  SignOutMutation,
  SignOutMutationVariables
>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignOutMutation,
    SignOutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(
    SignOutDocument,
    options
  );
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<
  SignOutMutation,
  SignOutMutationVariables
>;
export const SessionDocument = gql`
  query Session {
    session {
      ...SessionItem
    }
  }
  ${SessionItemFragmentDoc}
`;

/**
 * __useSessionQuery__
 *
 * To run a query within a React component, call `useSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionQuery(
  baseOptions?: Apollo.QueryHookOptions<SessionQuery, SessionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SessionQuery, SessionQueryVariables>(
    SessionDocument,
    options
  );
}
export function useSessionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SessionQuery, SessionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SessionQuery, SessionQueryVariables>(
    SessionDocument,
    options
  );
}
export type SessionQueryHookResult = ReturnType<typeof useSessionQuery>;
export type SessionLazyQueryHookResult = ReturnType<typeof useSessionLazyQuery>;
export type SessionQueryResult = Apollo.QueryResult<
  SessionQuery,
  SessionQueryVariables
>;
export const gqlOperations = {
  Query: {
    Links: "Links",
    Profile: "Profile",
    Session: "Session",
  },
  Mutation: {
    CreateLink: "CreateLink",
    UpsertProfile: "UpsertProfile",
    SignIn: "SignIn",
    SignOut: "SignOut",
  },
  Fragment: {
    LinkItem: "LinkItem",
    ProfileItem: "ProfileItem",
    SessionItem: "SessionItem",
  },
};

import { Maybe, Scalars } from '../graphql/generated/types';

export interface StatusType {
  status: Maybe<Scalars['String']> | undefined;
  type?: Maybe<Scalars['String']> | undefined;
}
import React from 'react';
import { Maybe, Scalars } from '../graphql/generated/types';

export interface CardType {
  title: Maybe<Scalars['String']> | undefined;
  description: Maybe<Scalars['String']> | undefined;
  image: Maybe<Scalars['String']> | undefined;
  status: Maybe<Scalars['String']> | undefined;
  type?: Maybe<Scalars['String']> | undefined;
  icon: React.ReactNode;
}

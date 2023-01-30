import { QueryHookOptions, useQuery } from '@apollo/client';

import { GQL_GET_LOCATIONS } from '../graphql/queries/getLocations.gql';
import { GetEpisodesQuery } from '../graphql/generated/types';

export const useQueryGetLocations = (
  options?: QueryHookOptions<GetEpisodesQuery>,
) => {
  return useQuery<GetEpisodesQuery>(GQL_GET_LOCATIONS, {
    fetchPolicy: 'cache-first',
    ...options,
  });
};
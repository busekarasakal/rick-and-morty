import { QueryHookOptions, useQuery } from '@apollo/client';

import { GQL_GET_EPISODES } from '../graphql/queries/getEpisodes.gql';
import { GetLocationsQuery } from '../graphql/generated/types';

export const useQueryGetLocations = (
  options?: QueryHookOptions<GetLocationsQuery>,
) => {
  return useQuery<GetLocationsQuery>(GQL_GET_EPISODES, {
    fetchPolicy: 'cache-first',
    ...options,
  });
};
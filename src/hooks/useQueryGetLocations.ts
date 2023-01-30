import { QueryHookOptions, useQuery } from '@apollo/client';

import { GQL_GET_LOCATIONS } from '../graphql/queries/getLocations.gql';
import { GetLocationsQuery } from '../graphql/generated/types';

export const useQueryGetLocations = (
  options?: QueryHookOptions<GetLocationsQuery>,
) => {
  return useQuery<GetLocationsQuery>(GQL_GET_LOCATIONS, {
    fetchPolicy: 'cache-first',
    ...options,
  });
};
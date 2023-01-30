import { QueryHookOptions, useQuery } from '@apollo/client';

import { GQL_GET_EPISODES } from '../graphql/queries/getEpisodes.gql';
import { GetEpisodesQuery } from '../graphql/generated/types';

export const useQueryGetEpisodes = (
  options?: QueryHookOptions<GetEpisodesQuery>,
) => {
  return useQuery<GetEpisodesQuery>(GQL_GET_EPISODES, {
    fetchPolicy: 'cache-first',
    ...options,
  });
};
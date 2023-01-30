import { QueryHookOptions, useQuery } from '@apollo/client';

import { GQL_GET_CHARACTERS } from '../graphql/queries/getCharacters.gql';
import { GetCharactersQuery } from '../graphql/generated/types';

export const useQueryGetCharacters = (
  options?: QueryHookOptions<GetCharactersQuery>,
) => {
  return useQuery<GetCharactersQuery>(GQL_GET_CHARACTERS, {
    fetchPolicy: 'cache-first',
    ...options,
  });
};
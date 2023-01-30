import { gql } from '@apollo/client';

export const GQL_GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        image
        species
        type
        location {
          name
        }
      }
    }
  }
`;

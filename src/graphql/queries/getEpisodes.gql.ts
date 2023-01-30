import { gql } from '@apollo/client';

export const GQL_GET_EPISODES = gql`
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        episode
        air_date
        created
      }
    }
  }
`;
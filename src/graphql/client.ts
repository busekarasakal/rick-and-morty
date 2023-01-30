import { ApolloClient, InMemoryCache } from '@apollo/client';

import { APP_ENV, ENV_DEVELOPMENT, VITE_API_URL } from '../utils/constants';

export const createApolloClient = () => {
  const isDevelopment = APP_ENV === ENV_DEVELOPMENT;

  return new ApolloClient({
    uri: VITE_API_URL,
    cache: new InMemoryCache(),
    connectToDevTools: isDevelopment,
  });
};
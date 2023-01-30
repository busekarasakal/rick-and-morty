import { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { createApolloClient } from './graphql/client';

import { App } from './components/App';
import { Layout } from './components/Layout';

function Root() {
  const [apolloClient, setApolloClient] = useState<ApolloClient<any> | null>(
    null,
  );

  useEffect(() => {
    setApolloClient(createApolloClient());
  }, []);

  if (!apolloClient) return null;
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <App />
      </Layout>
    </ApolloProvider>
  );
}

export default Root;
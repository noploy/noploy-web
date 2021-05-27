import { HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookie from 'js-cookie'

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_APP_API}/graphql`,
  credentials: "include",
});

// const link = onError(({ graphQLErrors, networkError, response }) => {
//   if (graphQLErrors && graphQLErrors.find((e: any) => e.status == 401)) {
//     window.location.href = "/logout";
//   }
// });

const authMiddleware = setContext(async (_, { headers }) => {
  const token = Cookie.get('token');

  return {
    headers: {
      ...headers,
      Authorization: token
    },
  };
});

export const client = new ApolloClient({
  link: authMiddleware.concat(httpLink),//.concat(link),
  cache: new InMemoryCache({
    resultCaching: true,
    dataIdFromObject: (o) => (o.key ? "" + o.key : undefined),
  }),
});

export default ({ children }: any) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

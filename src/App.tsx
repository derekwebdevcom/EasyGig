import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RouteStack from './routes/routes';
import TempView from './TempView';
import {ApolloProvider} from '@apollo/client';
import {getAccessToken, setAccessToken} from './accessToken';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink, Observable} from 'apollo-link';
import {TokenRefreshLink} from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
const $URL = 'http://localhost:4000/graphql';
const $RefreshURL = 'http://localhost:4000/refresh_token';
const cache = new InMemoryCache({});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any;
      Promise.resolve(operation)
        .then(operation => {
          const accessToken = getAccessToken();
          if (accessToken) {
            operation.setContext({
              headers: {
                authorization: `bearer ${accessToken}`,
              },
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    }),
);

const client = new ApolloClient({
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: 'accessToken',
      isTokenValidOrUndefined: () => {
        const token = getAccessToken();

        if (!token) {
          return true;
        }

        try {
          const {exp} = jwtDecode(token);
          if (Date.now() >= exp * 1000) {
            return false;
          } else {
            return true;
          }
        } catch {
          return false;
        }
      },
      fetchAccessToken: () => {
        return fetch($RefreshURL, {
          method: 'POST',
          credentials: 'include',
        });
      },
      handleFetch: accessToken => {
        setAccessToken(accessToken);
      },
      handleError: err => {
        console.warn('Your refresh token is invalid. Try to relogin');
        console.error(err);
      },
    }),
    onError(({graphQLErrors, networkError}) => {
      console.log(graphQLErrors);
      console.log(networkError);
    }),
    requestLink,
    new HttpLink({
      uri: $URL,
      credentials: 'include',
    }),
  ]),
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, {isConnected}, {cache}) => {
        cache.writeData({data: {isConnected}});
        return null;
      },
    },
  },
});

cache.writeData({
  data: {
    isConnected: true,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <RouteStack />
    </NavigationContainer>
  );
};

export default function AppConnected() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

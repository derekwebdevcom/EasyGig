import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RouteStack from './routes/routes';
import TempView from './TempView';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
const $URL = 'http://localhost:4000/graphql';
const client = new ApolloClient({
  uri: $URL,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    // <TempView />
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

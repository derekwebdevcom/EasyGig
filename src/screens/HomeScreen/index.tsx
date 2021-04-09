import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useUsersQuery} from '../../generated/graphql';

import styles from './styles';
import Header from '../../components/Header';
import Bye from '../Bye';

const HomeScreen = (props: any) => {
  const {data} = useUsersQuery({fetchPolicy: 'network-only'});
  const navigation = useNavigation();
  if (!data) {
    return (
      <SafeAreaView>
        <Text>loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Header />
      <Text>users:</Text>
      {data.users.map(x => {
        return (
          <SafeAreaView key={x.id}>
            <Text>
              {x.email}, {x.id}
            </Text>
          </SafeAreaView>
        );
      })}
      <Bye />
    </SafeAreaView>
  );
};

export default HomeScreen;

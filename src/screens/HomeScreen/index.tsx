import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useUsersQuery} from '../../generated/graphql';

import styles from './styles';

const HomeScreen = (props: any) => {
  const {data} = useUsersQuery({fetchPolicy: 'network-only'});
  return (
    <SafeAreaView>
      <Text>users:</Text>
      {/* <View>
        {data?.users.map(x => {
          return <
        })}
      </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

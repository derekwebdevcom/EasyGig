import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {useQuery} from '@apollo/client';
import {gql} from '@apollo/client';
import {useHelloQuery} from './generated/graphql';

const TempView = () => {
  const {data, loading} = useHelloQuery();

  if (loading || !data) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <Text>{data.hello}</Text>
    </SafeAreaView>
  );
};

export default TempView;

const styles = StyleSheet.create({});

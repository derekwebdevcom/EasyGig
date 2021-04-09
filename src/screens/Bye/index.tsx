import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {useByeQuery} from '../../generated/graphql';

const Bye = () => {
  const {data, loading, error} = useByeQuery();

  if (loading) {
    <SafeAreaView>
      <Text>...loading</Text>
    </SafeAreaView>;
  }
  if (error) {
    console.log(error);
    return (
      <SafeAreaView>
        <Text>Error</Text>
      </SafeAreaView>
    );
  }
  if (!data) {
    return (
      <SafeAreaView>
        <Text>no data</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Text>{data.bye}</Text>
    </SafeAreaView>
  );
};

export default Bye;

const styles = StyleSheet.create({});

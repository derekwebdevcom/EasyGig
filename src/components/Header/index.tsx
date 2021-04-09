import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {setAccessToken} from '../../accessToken';
import {useLoginMutation, useMeQuery} from '../../generated/graphql';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Header = () => {
  const {data, loading} = useMeQuery();
  const [logout, {client}] = useLoginMutation();
  const navigation = useNavigation();
  let content: any = null;
  if (loading) {
    content = null;
  } else if (data && data.me) {
    content = (
      <View>
        <Text>You are logged in as: {data.me.email}</Text>
      </View>
    );
  } else {
    content = (
      <View>
        <Text>You are not logged in</Text>
      </View>
    );
  }
  const logOutAction = async () => {
    await logout();
    setAccessToken('');
    await client!.resetStore();
    navigation.navigate('LoginScreen');
  };

  return (
    <View>
      <Text>This is the header</Text>
      {data && data.me ? (
        <View>
          <Text>You are logged in as: {data.me.email}</Text>
          <TouchableOpacity onPress={logOutAction}>
            <Text>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text>You are not logged in</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import FirstScene from '../screens/FirstScene';
import SecondScene from '../screens/SecondScene';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import Bye from '../screens/Bye';
import {setAccessToken} from '../accessToken';
const $RefreshURL = 'http://localhost:4000/refresh_token';
const Stack = createStackNavigator();

const RouteStack = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch($RefreshURL, {
      method: 'POST',
      credentials: 'include',
    }).then(async x => {
      const {accessToken} = await x.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>loading...</Text>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <Stack.Navigator
      initialRouteName="FirstScene"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FirstScene" component={FirstScene} />
      <Stack.Screen name="SecondScene" component={SecondScene} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Bye" component={Bye} />
    </Stack.Navigator>
  );
};

export default RouteStack;
function accessToken(accessToken: any) {
  throw new Error('Function not implemented.');
}

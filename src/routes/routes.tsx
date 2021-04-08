import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import FirstScene from '../screens/FirstScene';
import SecondScene from '../screens/SecondScene';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const RouteStack = () => {
  // const [auth, setAuth] = useState(true);
  // const [userToken, setUserToken] = useState(true);

  // useEffect(() => {}, []);
  // if (setAuth) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size={'large'} />
  //     </View>
  //   );
  // }
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
    </Stack.Navigator>
  );
};

export default RouteStack;

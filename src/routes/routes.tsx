import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Messages from '../components/Messages';
import Notifications from '../components/Notifications';
import Post from '../components/Post';
import Jobs from '../components/Jobs';
import FirstScene from '../screens/FirstScene';
import SecondScene from '../screens/SecondScene';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import Bye from '../screens/Bye';
import {setAccessToken} from '../accessToken';
const $RefreshURL = 'http://localhost:4000/refresh_token';
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
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
        <Text>Loading...</Text>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  const DrawerStack = () => {};

  const TabsStack = () => {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name={'Feed'} component={HomeScreen} />
        <Tabs.Screen name={'Messages'} component={Messages} />
        <Tabs.Screen name={'Post'} component={Post} />
        <Tabs.Screen name={'Notifications'} component={Notifications} />
        <Tabs.Screen name={'Jobs'} component={Jobs} />
      </Tabs.Navigator>
    );
  };
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <AuthStack.Screen name={'FirstScene'} component={FirstScene} />
      <AuthStack.Screen name={'SecondScene'} component={SecondScene} />
      <AuthStack.Screen name={'LoginScreen'} component={LoginScreen} />
      <AuthStack.Screen name={'HomeStackScreen'} component={TabsStack} />
      <AuthStack.Screen name="Bye" component={Bye} />
    </AuthStack.Navigator>
  );
};

export default RouteStack;
function accessToken(accessToken: any) {
  throw new Error('Function not implemented.');
}

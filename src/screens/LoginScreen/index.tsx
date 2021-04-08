import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Login from '../../components/Login';
import Register from '../../components/Register';
import * as Animatable from 'react-native-animatable';

const LoginScreen = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showRegisterButton, setShowRegisterButton] = useState(true);

  const registerAction = () => {
    setShowRegister(!showRegister);
    setShowRegisterButton(!showRegisterButton);
    setShowLoginButton(!showLoginButton);
  };
  const loginAction = () => {
    setShowLogin(!showLogin);
    setShowLoginButton(!showLoginButton);
    setShowRegisterButton(!showRegisterButton);
  };
  return (
    <Animatable.View style={styles.container} animation="fadeInUpBig">
      <LinearGradient
        colors={['#43D4FF', '#38ABFD', '#2974FA']}
        style={styles.bgGradient}>
        <Image
          source={require('../../assets/walkingdog.jpg')}
          style={styles.image}
        />

        <View style={styles.buttonView}>
          {showLoginButton ? (
            <TouchableOpacity style={styles.button} onPress={loginAction}>
              <LinearGradient
                colors={['#43D4FF', '#38ABFD', '#2974FA']}
                style={styles.gradient}>
                <Text style={styles.textButton}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : null}
        </View>
        {showRegister ? (
          <Animatable.View animation="zoomInUp">
            <Register registerAction={registerAction} />
          </Animatable.View>
        ) : null}
        {showLogin ? (
          <Animatable.View animation="zoomInUp">
            <Login loginAction={loginAction} />
          </Animatable.View>
        ) : null}
        {showRegisterButton ? (
          <View style={styles.buttonView2}>
            <TouchableOpacity style={styles.button} onPress={registerAction}>
              <LinearGradient
                colors={['#43D4FF', '#38ABFD', '#2974FA']}
                style={styles.gradient}>
                <Text style={styles.textButton}>Register</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : null}
      </LinearGradient>
    </Animatable.View>
  );
};

export default LoginScreen;

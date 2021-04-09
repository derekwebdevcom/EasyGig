import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Login from '../Login';
import styles from './styles';
import {validate} from 'graphql';
import {useRegisterMutation} from '../../generated/graphql';
import {useNavigation} from '@react-navigation/native';

const Register = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterMutation();
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });

  const textInputChange = (val: string) => {
    if (val.length !== 0) {
      setSecureEntry({
        ...secureEntry,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setSecureEntry({
        ...secureEntry,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const passInputChange = (val: string) => {
    setSecureEntry({
      ...secureEntry,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setSecureEntry({
      ...secureEntry,
      secureTextEntry: !secureEntry.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setSecureEntry({
      ...secureEntry,
      confirmSecureTextEntry: !secureEntry.confirmSecureTextEntry,
    });
  };

  const handleConfirmPasswordChange = (val: any) => {
    setSecureEntry({
      ...secureEntry,
      confirm_password: val,
    });
  };

  // const emailInput = val => {
  //   textInputChange(val);
  // };

  // const emailUser = () => {};

  const registerWorker = async () => {
    console.log('form submitted');

    const response = await register({
      variables: {
        email,
        password,
      },
    });
    console.log(response);
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register for EasyGig</Text>
      <View style={styles.email}>
        <Text style={styles.emailText}>Email:</Text>
      </View>
      <View style={styles.form}>
        <FontAwesome name="user-o" color="#FFFFFF" size={20} />
        <TextInput
          placeholder="Please enter your email"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
          value={email}
          // onChangeText={val => textInputChange(val)}
        />
        {secureEntry.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="white" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      <View style={styles.email}>
        <Text style={styles.emailText}>Password:</Text>
      </View>
      <View style={styles.form}>
        <FontAwesome name="lock" color="#FFFFFF" size={20} />
        <TextInput
          placeholder="Please enter your password"
          style={styles.textInput}
          secureTextEntry={secureEntry.secureTextEntry ? true : false}
          onChangeText={text => setPassword(text)}
          value={password}
          // onChangeText={val => passInputChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {secureEntry.secureTextEntry ? (
            <Animatable.View animation="bounceIn">
              <Feather name="eye-off" color="white" size={20} />
            </Animatable.View>
          ) : (
            <Animatable.View animation="bounceIn">
              <Feather name="eye" color="white" size={20} />
            </Animatable.View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.email}>
        <Text style={styles.emailText}>Confirm Password:</Text>
      </View>
      {/* <View style={styles.form}>
        <FontAwesome name="lock" color="#FFFFFF" size={20} />
        <TextInput
          placeholder="Please confirm your password"
          style={styles.textInput}
          secureTextEntry={secureEntry.confirmSecureTextEntry ? true : false}
          onChangeText={text => setPassword(text)}
          value={password}
          // onChangeText={val => handleConfirmPasswordChange(val)}
        />
        <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
          {secureEntry.secureTextEntry ? (
            <Animatable.View animation="bounceIn">
              <Feather name="eye-off" color="white" size={20} />
            </Animatable.View>
          ) : (
            <Animatable.View animation="bounceIn">
              <Feather name="eye" color="white" size={20} />
            </Animatable.View>
          )}
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity style={styles.button} onPress={registerWorker}>
        <LinearGradient
          colors={['#43D4FF', '#38ABFD', '#2974FA']}
          style={styles.gradient}>
          <Text style={styles.textButton}>Register</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.alreadyMember}>
        <Text style={styles.alreadyMemberText}>Already a Member?</Text>
        <Text style={styles.alreadyMemberText}>Login</Text>
        <TouchableOpacity onPress={props.registerAction}>
          <View style={styles.icon}>
            <AntDesign name={'arrowleft'} size={30} color={'#2974FA'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

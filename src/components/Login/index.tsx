import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Register from '../Register';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
interface Props {}

const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [secureEntry, setSecureEntry] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login EasyGig</Text>
      <View style={styles.email}>
        <Text style={styles.emailText}>Email:</Text>
      </View>
      <View style={styles.form}>
        <FontAwesome name="user-o" color="#FFFFFF" size={20} />
        <TextInput
          placeholder="Please enter your email"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={val => textInputChange(val)}
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
          onChangeText={val => passInputChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          <Feather name="eye-off" color="white" size={20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#43D4FF', '#38ABFD', '#2974FA']}
          style={styles.gradient}>
          <Text style={styles.textButton}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.alreadyMember}>
        <Text style={styles.alreadyMemberText}>No Account?</Text>
        <Text style={styles.alreadyMemberText}>Register</Text>
        <TouchableOpacity onPress={props.loginAction}>
          <View style={styles.icon}>
            <AntDesign name={'arrowleft'} size={30} color={'#2974FA'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

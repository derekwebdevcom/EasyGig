import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const FirstScene = ({navigation}) => {
  const startButton = () => {
    navigation.navigate('SecondScene');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/easygig1scene.jpg')}>
        <View style={styles.textContainer}>
          <LinearGradient
            colors={['#43D4FF', '#38ABFD', '#2974FA']}
            style={styles.header}>
            <Text style={styles.text}>Welcome to EasyGig</Text>
          </LinearGradient>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={startButton}>
            <LinearGradient
              colors={['#43D4FF', '#38ABFD', '#2974FA']}
              style={styles.gradient}>
              <Text style={styles.textButton}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.icon}>
            <AntDesign
              name={'arrowright'}
              size={36}
              color={'#2974FA'}
              onPress={startButton}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FirstScene;

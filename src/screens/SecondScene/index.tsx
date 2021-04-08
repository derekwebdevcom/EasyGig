import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const SecondScene = ({navigation}) => {
  const goBack = () => {
    navigation.navigate('LoginScreen');
  };
  const goHome = () => {
    navigation.navigate('FirstScene');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#43D4FF', '#38ABFD', '#2974FA']}
        style={styles.bgGradient}>
        <View style={styles.heading}>
          <Text style={styles.text}>Disclaimer:</Text>
          <Text style={styles.text}>EasyGig</Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={styles.textParagraph}>
            Uniquely transform standardized scenarios via standardized
            information. Distinctively underwhelm unique sources with low-risk
            high-yield leadership. Quickly reintermediate 2.0 web-readiness
            rather than highly efficient outsourcing. Synergistically deliver
            resource sucking platforms before next-generation innovation.
            <Text style={styles.textParagraph}>
              Rapidiously formulate enterprise-wide internal or "organic"
              sources with clicks-and-mortar ROI. Compellingly unleash
              intermandated products vis-a-vis market-driven users.
              Authoritatively streamline web-enabled partnerships with empowered
              materials.
            </Text>
            Enthusiastically engineer vertical paradigms without superior
            quality vectors. Distinctively communicate unique quality vectors
            through quality technologies. Energistically innovate sustainable
            potentialities via resource maximizing interfaces. Efficiently.
          </Text>
        </View>
        <View style={styles.buttonView}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={goHome}>
              <AntDesign name={'arrowleft'} size={36} color={'#2974FA'} />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={goBack}>
              <AntDesign name={'arrowright'} size={36} color={'#2974FA'} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SecondScene;

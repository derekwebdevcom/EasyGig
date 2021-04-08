import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  image: {
    height: '40%',
    width: '100%',
    top: 0,
    position: 'absolute',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
  },
  textButton: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Helvetica',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
  },
  bgGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
  },
  button: {
    width: 200,
    padding: 0,
  },
  buttonView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView2: {
    position: 'absolute',
    top: 450,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;

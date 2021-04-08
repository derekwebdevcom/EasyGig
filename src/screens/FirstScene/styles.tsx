import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  textContainer: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    margin: 0,
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'Helvetica',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Helvetica',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    height: 45,
  },
  buttonView: {
    position: 'absolute',
    top: 300,
    left: 0,
    right: 0,
    bottom: -300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    margin: 8,
    paddingTop: 6,
    width: 50,
    height: 50,
    backgroundColor: '#f8f8ff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
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
  paragraphContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  textParagraph: {
    justifyContent: 'center',
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'Helvetica',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  bgGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    height: 45,
  },
  buttonView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 300,
    left: 0,
    right: 0,
    bottom: -300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 600,
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

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 220,
    height: '40%',
    width: '80%',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Helvetica',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
  },
  button: {
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
  buttonView: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    margin: 10,
    paddingLeft: 10,
    color: '#000',
    backgroundColor: '#fff',
    height: 35,
    width: '90%',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff',
    margin: 10,
  },
  alreadyMember: {
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  email: {
    margin: 3,
  },
  emailText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyMemberText: {
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    alignItems: 'center',
    margin: 8,
    paddingTop: 10,
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

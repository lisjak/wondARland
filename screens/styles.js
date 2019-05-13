import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 60,
    marginBottom: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 0.9,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thumbnail: {
    height: 70,
    width: 50,
    padding: 5,
  },
  bodyText: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Avenir',
    fontSize: 18,
    color: 'white',
  },
  boldText: {
    fontFamily: 'Avenir-black',
  },
  instructionsTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  inner: {
    margin: 36,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
  },
  message: {
    fontWeight: 'normal',
    fontSize: 30,
    color: '#fff',
  },
  button: {
    padding: 18,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
});

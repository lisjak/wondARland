import { StyleSheet } from 'react-native'


export default StyleSheet.create({
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

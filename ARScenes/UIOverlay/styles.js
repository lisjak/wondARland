import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.18,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  secondRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center'
    marginBottom: 0,
  },
  timerText: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 36,
    color: 'white',
    marginBottom: 0,
  },
  button: {
    padding: 18,
    width: 150,
    marginBottom: 12,
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
  buttonBarButton: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    marginTop: 10,
  },
  buttonBarText: {
    color: 'white',
    // color: '#E64A19',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
});

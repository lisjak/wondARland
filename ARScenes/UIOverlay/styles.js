import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.18,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 0
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
        marginBottom: 0
  },
  secondRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center'
        marginBottom: 0
  },
  timerText: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 36,
    color: 'white',
        marginBottom: 0
  },
});

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

  homeContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 0.9,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  entrySceneContainer: {
    flex: 1,
    backgroundColor: '#ac3c0b',
    borderRadius: 10,
    margin: 20,
    marginBottom: 30,
    padding: 10,
    // justifyContent: 'center'
  },

  homeOuter: {
    flex: 0.82,
    flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'transparent',
  },
  outer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  homeInner: {
    flex: 0.82,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  homeButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeButtonRow: {
    flex: 0.5,
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  thumbnail: {
    height: 70,
    width: 50,
    padding: 5,
  },
  bodyText: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#fff',

    marginTop: 25,
    // textAlign: 'center',
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
    marginBottom: 20,
  },
  message: {
    fontWeight: 'normal',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  instructionsTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
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
  modalButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    height: 60
  },
  ARScene: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#04152b',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 0,
    marginBottom: 60,
  },
});

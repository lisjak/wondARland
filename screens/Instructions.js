import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

const diamond = require('../assets/images/diamonds_thumb.jpg');
const heart = require('../assets/images/heart_thumb.jpg');
const spade = require('../assets/images/spade_thumb.jpg');
const club = require('../assets/images/club_thumb.jpg');

class Instructions extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Instructions</Text>
          <Text style={styles.bodyText}>
            <Text style={styles.boldText}>Keymaster:</Text> It’s your job to
            place the four card keys somewhere in the real world. Each card
            opens a different scene containing clues to a password.
          </Text>
          <View style={styles.imageContainer}>
            <Image style={styles.thumbnail} source={diamond} />
            <Image style={styles.thumbnail} source={spade} />
            <Image style={styles.thumbnail} source={heart} />
            <Image style={styles.thumbnail} source={club} />
          </View>
          <Text style={styles.bodyText}>
            <Text style={styles.boldText}>Player:</Text> Find each key card and
            scan it with your camera, then enter the magical portal that is
            revealed.
          </Text>
          <Text style={styles.bodyText}>
            <Text style={styles.boldText}>
              Can you find the clues and enter the password before time runs
              out?
            </Text>
          </Text>
        </View>

        <TouchableHighlight
          style={styles.buttons}
          onPress={() => history.push('/')}
          underlayColor="#893008"
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Instructions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 60,
    marginBottom: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 0.9,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    // marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    height: 50,
    width: 160,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ac3c0b',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  thumbnail: {
    height: 70,
    width: 50,
    padding: 5,
  },
});

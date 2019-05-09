import React from 'react';
import {
  View,
  List,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';
import { Button } from 'react-native-material-ui';
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
          <Text style={styles.title}>Welcome to WondARLand!</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Instructions</Text>

          <View style={styles.imageContainer}>
            <Image style={styles.thumbnail} source={diamond} />
            <Image style={styles.thumbnail} source={spade} />
            <Image style={styles.thumbnail} source={heart} />
            <Image style={styles.thumbnail} source={club} />
          </View>

          <Text style={styles.bodyText}>
            Search for playing cards hidden in the real world. Scan each card to
            make a magical portal appear. Then go down the rabbit hole and
            search for clues leading to a 3-digit password.
          </Text>

          <Text style={styles.subtitle}>
            Can you find all the clues and escape before the timer runs out?
          </Text>
        </View>

        <TouchableHighlight
          style={styles.buttons}
          onPress={() => history.push('/')}
          underlayColor="#68a0ff"
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
    margin: 6,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
  },
  imageContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textBlock: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
  },
  title: {
    // flex: 3,
    // marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Avenir-Black',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    // justifyContent: 'space-between',
  },
  subtitle: {
    marginTop: 20,
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
    fontFamily: 'Avenir-Black',
    fontSize: 18,
    color: 'white',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    height: 60,
    width: 160,
    marginTop: 10,
    paddingTop: 7,
    paddingBottom: 10,
    backgroundColor: 'red',
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

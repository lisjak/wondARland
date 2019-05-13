import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

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
          <Text style={styles.instructionsTitle}>Instructions</Text>
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
          style={styles.button}
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

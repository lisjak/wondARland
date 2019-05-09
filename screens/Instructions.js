import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-material-ui';

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
});

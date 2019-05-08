import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Instructions extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <Text style={styles.title}>Instructions</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Welcome to WondARLand!</Text>
          <Text style={styles.subtitle}>
            Go find the keys in real life and race against the timer to find a 3
            digit password.
          </Text>
          <Text style={styles.subtitle}>
            Can you find the clues and escape in time?
          </Text>
        </View>
        <View style={styles.container}>
          <Button title="go back" onPress={() => history.push('/')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 600,
  },
  title: {
    // flex: 3,
    // marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    // justifyContent: 'space-between',
  },
  subtitle: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
});

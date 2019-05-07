import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Winner extends Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <Text style={styles.title}>You Lose!</Text>
          <Text style={styles.subtitle}>Jinkies!</Text>
          <Text style={styles.subtitle}>You weren't able to escape!</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Play again?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
});

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

class Loser extends Component {
  render() {
    const { history } = this.props;
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <Text style={styles.title}>You Lose!</Text>
          {/* <Text style={styles.subtitle}>Jinkies!</Text> */}
          <Text style={styles.subtitle}>
            You weren't able to escape in time.
          </Text>
        </View>

        <View style={styles.container}>
          <TouchableHighlight
            style={styles.buttons}
            onPress={() => history.push('/')}
            underlayColor="#68a0ff"
          >
            <Text style={styles.buttonText}>Try again?</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Loser;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4440d',
    height: 600,
  },
  title: {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
  },
  subtitle: {
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
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
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#ac3c0b',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

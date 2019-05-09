import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { gameResumedThunk } from '../store/gameReducer';

class PauseScreen extends Component {
  constructor() {
    super();
    this.handleResume = this.handleResume.bind(this);
  }

  handleResume() {
    const { history, resumeGame } = this.props;
    resumeGame();
    history.goBack();
  }

  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <Text style={styles.title}>Game Paused</Text>
        </View>

        <View style={styles.container}>
          <TouchableHighlight
            style={styles.buttons}
            onPress={this.handleResume}
            underlayColor="#68a0ff"
          >
            <Text style={styles.buttonText}>Resume</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    resumeGame: () => dispatch(gameResumedThunk()),
  };
};

export default connect(
  null,
  mapDispatch
)(PauseScreen);

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
    margin: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 40,
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

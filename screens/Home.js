import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Button,
} from 'react-native';

import { connect } from 'react-redux';
import { gameStartedThunk } from '../store/gameReducer';

class ViroSample extends Component {
  constructor() {
    super();
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    const { history, startGame } = this.props;
    startGame();
    history.push('/entryarscene');
  }

  render() {
    const { history } = this.props;
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.titleText}>Welcome!</Text>

          <TouchableHighlight
            style={localStyles.buttons}
            // onPress={this._welcomeScreenOnPress(AR_NAVIGATOR_TYPE)}
            onPress={this.handleStart}
            underlayColor="#68a0ff"
          >
            <Text style={localStyles.buttonText}>Play</Text>
          </TouchableHighlight>
        </View>
        <Button
          title="Login"
          style={localStyles.buttons}
          onPress={() => history.push('/login')}
        />
        <Button
          title="Instructions"
          style={localStyles.buttons}
          onPress={() => history.push('/instructions')}
        />
      </View>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    startGame: () => dispatch(gameStartedThunk()),
  };
};

export default connect(
  null,
  mapDispatch
)(ViroSample);

//* stylings

let localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'rgba(52, 52, 52, 0.7)',
    backgroundColor: 'transparent',
  },
  rowContainer: {
    flex: 1,
    // margin: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  ARScene: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  viroContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

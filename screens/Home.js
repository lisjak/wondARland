import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import { connect } from 'react-redux';
import { gameStartedThunk } from '../store/gameReducer';
import { Button } from 'react-native-material-ui';

let wondARland = require('../assets/images/screen.gif');

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
      <View style={localStyles.container}>
        <View style={localStyles.outer}>
          <ImageBackground
            source={wondARland}
            style={{
              height: '94%',
              width: '100%',
              backgroundColor: '#04152b',
            }}
          />
        </View>
        <View style={localStyles.inner}>
          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this.handleStart}
            underlayColor="#04152b"
          >
            <Text style={localStyles.buttonText}>Start Game</Text>
          </TouchableHighlight>

          {/* login button commented out until it's functional
          <Button
            accent
            text="login"
            style={localStyles.buttons}
            onPress={() => history.push('/login')}
          /> */}

          {/* <Button
            accent
            text="instructions"
            style={localStyles.buttons}
            onPress={() => history.push('/instructions')}
          /> */}

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={() => history.push('/instructions')}
            underlayColor="#04152b"
          >
            <Text style={localStyles.buttonText}>Instructions</Text>
          </TouchableHighlight>
          {/* <TouchableHighlight
            style={localStyles.buttons}
            onPress={() => history.push('/login')}
            underlayColor="#04152b"
          >
            <Text style={localStyles.buttonText}>Login</Text>
          </TouchableHighlight> */}
          <TouchableHighlight
            style={localStyles.buttons}
            onPress={() => history.push('/signup')}
            underlayColor="#04152b"
          >
            <Text style={localStyles.buttonText}>Signup</Text>
          </TouchableHighlight>
        </View>
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
    // marginTop: 70,
    margin: 10,
    // backgroundColor: 'rgba(52, 52, 52, 0.7)',
    // backgroundColor: '#04152b',
  },
  rowContainer: {
    flex: 1,
    // margin: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#04152b',
  },
  outer: {
    flex: 0.82,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  inner: {
    flex: 0.1,
    flexDirection: 'column',
    marginBottom: 40,
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
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
    // marginBottom: 15,
  },
});

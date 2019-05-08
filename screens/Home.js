/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Button,
} from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
require('../secrets');

//* Timer overlay on screen
import Timer from '../ARScenes/Other/Timer';

let sharedProps = {
  apiKey: process.env.APIKEY,
};

//* First Scene --> FindingCards
// let InitialARScene = require('./ARScenes/FindingCards/FindingCards.js');
let InitialARScene = require('../ARScenes/Portals/PortScene');

let UNSET = 'UNSET';
let AR_NAVIGATOR_TYPE = 'AR';

//* This determines which type of experience to launch in, or UNSET, if the user should
//* be presented with a choice of AR or VR. By default, we offer the user a choice.
let defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps,
    };
    this._welcomeScreen = this._welcomeScreen.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._welcomeScreenOnPress = this._welcomeScreenOnPress.bind(this);
    // this._exitViro = this._exitViro.bind(this);
  }

  //* renders the welcome screen on default, on state change we navigate
  render() {
    if (this.state.navigatorType === UNSET) {
      return this._welcomeScreen();
    } else {
      return this._getARNavigator();
    }
  }

  //* Presents user with Welcome text and Play button to start game
  _welcomeScreen() {
    const { history } = this.props;
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.titleText}>Welcome!</Text>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this._welcomeScreenOnPress(AR_NAVIGATOR_TYPE)}
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
    // <PasswordScreen />)
  }

  //* Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    const { history } = this.props;
    return (
      <View style={localStyles.ARScene}>
        <ViroARSceneNavigator
          {...this.state.sharedProps}
          initialScene={{ scene: InitialARScene }}
        />
        <Timer history={history} />
      </View>
    );
  }

  //* This function returns an anonymous/lambda function to be used
  //* by the experience selector buttons
  _welcomeScreenOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType,
      });
    };
  }

  /// This function "exits" Viro by setting the navigatorType to UNSET.
  //   _exitViro() {
  //     this.setState({
  //       navigatorType: UNSET,
  //     });
  //   }
}

//* stylings
let localStyles = StyleSheet.create({
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
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

module.exports = ViroSample;

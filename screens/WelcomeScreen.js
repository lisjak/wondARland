import React, { Component } from '../node_modules/react';
import {
  // AppRegistry,
  Text,
  View,
  StyleSheet,
  // PixelRatio,
  TouchableHighlight,
} from 'react-native';

// import { ViroVRSceneNavigator, ViroARSceneNavigator } from 'react-viro';
// require('./secrets');
// import Winner from './Winner';

/*
//  TODO: Insert your API key below
//  */
// let sharedProps = {
//   apiKey: process.env.APIKEY,
// };


let InitialARScene = require('../ARScenes/FindingCards/FindingCards.js');


let UNSET = 'UNSET';
let VR_NAVIGATOR_TYPE = 'VR';
let AR_NAVIGATOR_TYPE = 'AR';

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
let defaultNavigatorType = UNSET;

export default class WelcomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps,
    };
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    // Presents the user with a choice of an AR or VR experience
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.titleText}>Welcome! Hello World!</Text>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor="#68a0ff"
          >
            <Text style={localStyles.buttonText}>Play</Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }


  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType,
      });
    };
  }

  // // This function "exits" Viro by setting the navigatorType to UNSET.
  // _exitViro() {
  //   this.setState({
  //     navigatorType: UNSET,
  //   });
  // }
}

let localStyles = StyleSheet.create({
  // viroContainer: {
  //   flex: 1,
  //   backgroundColor: 'black',
  // },
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
  // exitButton: {
  //   height: 50,
  //   width: 100,
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   marginTop: 10,
  //   marginBottom: 10,
  //   backgroundColor: '#68a0cf',
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: '#fff',
  // },
});

module.exports = WelcomeScreen;

import React, { Component } from 'react';
import { ViroARSceneNavigator } from 'react-viro';
import { View, StyleSheet } from 'react-native';
require('../secrets.js');
import ButtonBar from '../ARScenes/UIOverlay/ButtonBar';

let sharedProps = {
  apiKey: process.env.APIKEY,
};

let InitialARScene = require('../ARScenes/FindingCards/FindingCards');

export default class EntryARScene extends Component {
  constructor() {
    super();
    this.state = {
      sharedProps: sharedProps,
    };
  }

  render() {
    const { history } = this.props;
    return (
      <View style={styles.ARScene}>
        <ViroARSceneNavigator
          {...this.state.sharedProps}
          initialScene={{ scene: InitialARScene }}
        />
        <ButtonBar history={history} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ARScene: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

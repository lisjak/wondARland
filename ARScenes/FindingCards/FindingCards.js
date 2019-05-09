/* eslint-disable react/prefer-es6-class */
/**
 * Copyright (c) 2017-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React, { Component } from '../../node_modules/react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { PortalScene2 } from '../Portals/AcePortalScene2';
import PasswordScreen from '../../screens/PasswordScreen';

import QueenPortal2 from '../Portals/QueenPortal2';

import {
  ViroARScene,
  ViroSpinner,
  ViroText,
  ViroImage,
  ViroARImageMarker,
  Viro3DObject,
  ViroAmbientLight,
  Viro360Video,
  ViroBox,
  ViroNode,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  ViroAnimatedImage,
  ViroARTrackingTargets,
  ViroARPlane,
  ViroConstants,
} from '../../node_modules/react-viro';

// let createReactClass = require('create-react-class');

const transparentCheshire = require('../../assets/portal_assets/cheshireTransparent.gif');

class FindingCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Look around to initialize camera.',
      isLoading: true,
      playAnim: false,
      // isPortalRendered: false
    };
    this._onInitialized = this._onInitialized.bind(this);
    this._isPortalLoading = this._isPortalLoading.bind(this);
    this._onAnchorFound = this._onAnchorFound(this);
  }

  // Text update when AR initialized
  _onInitialized() {
    if (this.state === ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: `Portal incoming...`,
      });
    }
  }

  _onAnchorFound() {
    this.setState({
      playAnim: true,
    });
  }

  _isPortalLoading() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroText
          text={this.state.text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -0.5]}
          style={styles.helloWorldTextStyle}
        />

        <ViroAmbientLight color="#ffffff" intensity={200} />

        <ViroAnimatedImage
          scale={[1, 1, 1]}
          position={[0, 0, -0.5]}
          animation={{
            name: 'cheshireCat',
            run: this.state.playAnim,
            loop: true,
            delay: 0,
          }}
          height={0.5}
          width={0.5}
          source={transparentCheshire}
        />

        <ViroARImageMarker target="queen" onAnchorFound={this._onAnchorFound}>
          <ViroSpinner
            type="Light"
            position={[0, 0, -2]}
            visible={this.state.isLoading}
          />
          {/* Initializing Text Component */}
          <ViroText
            text={this.state.text}
            width={2}
            height={2}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0.5, -2]}
            style={styles.helloWorldTextStyle}
          />

          <QueenPortal2 />
        </ViroARImageMarker>
      </ViroARScene>
    );
  }
}

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  portalTextStyles: {
    fontFamily: 'Arial',
    fontSize: 28,
    color: '#C8243B',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroARTrackingTargets.createTargets({
  queen: {
    source: require('../../assets/target_markers_assets/queen.jpg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

module.exports = FindingCards;

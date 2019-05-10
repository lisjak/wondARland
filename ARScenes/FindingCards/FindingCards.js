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
import { AppRegistry, StyleSheet, Text, View, Vibration } from 'react-native';

import { PortalScene2 } from '../Portals/AcePortalScene2';
import PasswordScreen from '../../screens/PasswordScreen';

import PortScene from '../Portals/PortScene';
import QueenPortal2 from '../Portals/QueenPortal2';
import DiamondPortal from '../Portals/RosesPortal';

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
const tumble = require('../../assets/portal_assets/tumble.gif');

class FindingCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: true,
      playAnim: false,
      // isPortalRendered: false
    };
    this._onInitialized = this._onInitialized.bind(this);
    this._isPortalLoading = this._isPortalLoading.bind(this);
    this._onAnchorFound = this._onAnchorFound.bind(this);
    this._onAnchorRemoved = this._onAnchorRemoved.bind(this);
    // this._timeToVibrate = this._timeToVibrate.bind(this);
  }

  // Text update when AR initialized
  _onInitialized() {
    if (this.state === ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: `Portal incoming...`,
        visible: false,
      });
    }
  }

  _onAnchorFound() {
    this.setState({
      playAnim: true,
      visible: true,
    });
    Vibration.vibrate(1, false);
  }

  _onAnchorRemoved() {
    this.setState({
      playAnim: false,
      visible: false,
    });
  }

  _isPortalLoading() {
    this.setState({
      isLoading: false,
    });
  }

  // _timeToVibrate() {
  //     Vibration.vibrate(500);
  //   }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" intensity={200} />

        <ViroARImageMarker
          target="queen"
          onAnchorFound={this._onAnchorFound}
          onAnchorRemoved={this._onAnchorRemoved}
        >
          <ViroNode
            scale={[1, 1, 1]}
            transformBehaviors={['billboardX']}
            rotation={[0, -180, 0]}
          >
            <ViroText
              width={1}
              height={1}
              position={[0, 0, -1]}
              textAlign="center"
              textClipMode="ClipToBounds"
              text="Card found! Loading..."
              outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
              scale={[0.5, 0.5, 0.5]}
              style={styles.textStyle}
              visible={this.state.visible}
            />
          </ViroNode>

          <ViroNode scale={[1, 1, 1]} transformBehaviors={['billboardX']}>
            <ViroAnimatedImage
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
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
          </ViroNode>

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
            position={[0, 0.8, -2]}
            style={styles.helloWorldTextStyle}
            outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
          />

          <QueenPortal2 />
        </ViroARImageMarker>

        <ViroARImageMarker target="joker" onAnchorFound={this._onAnchorFound}>
          <ViroNode
            scale={[1, 1, 1]}
            transformBehaviors={['billboardX']}
            rotation={[0, -180, 0]}
          >
            <ViroText
              width={1}
              height={1}
              position={[0, 0, -1]}
              textAlign="center"
              textClipMode="ClipToBounds"
              text="Card found! Loading..."
              outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
              scale={[0.5, 0.5, 0.5]}
              style={styles.textStyle}
              visible={this.state.visible}
            />
          </ViroNode>

          <ViroNode scale={[1, 1, 1]} transformBehaviors={['billboardX']}>
            <ViroAnimatedImage
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              animation={{
                name: 'alice',
                run: true,
                loop: true,
                delay: 0,
              }}
              height={0.5}
              width={0.5}
              source={tumble}
            />
          </ViroNode>

          <ViroSpinner
            type="Light"
            position={[0, 0, -2]}
            visible={this.state.isLoading}
          />

          {/* Initializing Text Component */}
          <ViroText
            text="Portal incoming..."
            width={2}
            height={2}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0.8, -2]}
            style={styles.helloWorldTextStyle}
            outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
          />

          <PortScene />
        </ViroARImageMarker>

        <ViroARImageMarker
          target="diamond"
          onAnchorFound={this._onAnchorFound}
          onAnchorRemoved={this._onAnchorRemoved}
        >
          <ViroNode
            scale={[1, 1, 1]}
            transformBehaviors={['billboardX']}
            rotation={[0, -180, 0]}
          >
            <ViroText
              width={1}
              height={1}
              position={[0, 0, -1]}
              textAlign="center"
              textClipMode="ClipToBounds"
              text="Card found! Loading..."
              outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
              scale={[0.5, 0.5, 0.5]}
              style={styles.textStyle}
              visible={this.state.visible}
            />
          </ViroNode>

          <ViroSpinner
            type="Light"
            position={[0, 0, -2]}
            visible={this.state.isLoading}
          />

          {/* Initializing Text Component */}
          <ViroText
            text="Portal incoming..."
            width={2}
            height={2}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0.8, -2]}
            style={styles.helloWorldTextStyle}
            outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
          />

          <DiamondPortal />
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

ViroARTrackingTargets.createTargets({
  ace: {
    source: require('../../assets/target_markers_assets/ace.jpg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

ViroARTrackingTargets.createTargets({
  diamond: {
    source: require('../../assets/target_markers_assets/diamond.jpg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

ViroARTrackingTargets.createTargets({
  joker: {
    source: require('../../assets/target_markers_assets/sjoker.jpg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

ViroARTrackingTargets.createTargets({
  spades: {
    source: require('../../assets/target_markers_assets/spades.jpeg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

module.exports = FindingCards;

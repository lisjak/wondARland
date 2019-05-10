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
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import {
  ViroARScene,
  ViroARImageMarker,
  Viro3DObject,
  ViroAmbientLight,
  Viro360Video,
  ViroBox,
  ViroSound,
  ViroNode,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  ViroARTrackingTargets,
} from '../../node_modules/react-viro';

import HeartObject from './HeartObject';

export default class RosePortal extends Component {
  constructor() {
    super();
    this.state = {
      playPortal1Sound: true,
      playPortal2Sound: true,
    };

    this.handleEnterPortal1 = this.handleEnterPortal1.bind(this);
    this.handleExitPortal1 = this.handleExitPortal1.bind(this);
    this.handleEnterPortal2 = this.handleEnterPortal2.bind(this);
    this.handleExitPortal2 = this.handleExitPortal2.bind(this);
  }
  handleEnterPortal1() {
    this.setState({ playPortal1Sound: false });
  }

  handleExitPortal1() {
    this.setState({ playPortal1Sound: true });
  }

  handleEnterPortal2() {
    this.setState({ playPortal2Sound: false });
  }

  handleExitPortal2() {
    this.setState({ playPortal2Sound: true });
  }
  render() {
    return (
      <ViroPortalScene
        position={[0, -1, 0]}
        passable={true}
        onPortalEnter={this.handleEnterPortal1}
        onPortalExit={this.handleExitPortal1}
      >
        <ViroPortal position={[0, 0, -1]} scale={[0.25, 0.25, 0.25]}>
          <Viro3DObject
            source={require('../../assets/portal_assets/portal_res/portal_ship/portal_ship.vrx')}
            resources={[
              require('../../assets/portal_assets/portal_res/portal_ship/portal_ship_diffuse.png'),
              require('../../assets/portal_assets/portal_res/portal_ship/portal_ship_normal.png'),
              require('../../assets/portal_assets/portal_res/portal_ship/portal_ship_specular.png'),
            ]}
            type="VRX"
          />
        </ViroPortal>
        <Viro360Image
          source={require('../../assets/portal_assets/360roses.png')}
        />

        <HeartObject position={[1, 1, -3]} />
        <HeartObject position={[0, 2, -5]} />
        <HeartObject position={[2, -1, -4]} />
        <HeartObject position={[0, 4, -1]} />

        <ViroSound
          paused={this.state.playPortal1Sound}
          muted={false}
          source={require('../../assets/music/arcadia-by-kevin-macleod.mp3')}
          loop={true}
          volume={1.0}
        />

        <ViroPortalScene
          position={[0, -1, 0]}
          passable={true}
          onPortalEnter={this.handleEnterPortal2}
          onPortalExit={this.handleExitPortal2}
        >
          <ViroPortal position={[2, 1, -4]} scale={[0.5, 0.5, 0.5]}>
            <Viro3DObject
              source={require('../../assets/portal_assets/portal_res/portal_ship/portal_ship.vrx')}
              resources={[
                require('../../assets/portal_assets/portal_res/portal_ship/portal_ship_diffuse.png'),
                require('../../assets/portal_assets/portal_res/portal_ship/portal_ship_normal.png'),
                require('../../assets/portal_assets/portal_res/portal_ship/portal_ship_specular.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image
            source={require('../../assets/portal_assets/tree360.jpg')}
          />

          <HeartObject position={[1, 1, -3]} />
          <HeartObject position={[0, 2, -5]} />
          <HeartObject position={[2, -1, -4]} />
          <HeartObject position={[0, 4, -1]} />

          <ViroSound
            paused={this.state.playPortal2Sound}
            muted={false}
            source={require('../../assets/music/monkeys-spinning-monkeys-by-kevin-macleod.mp3')}
            loop={true}
            volume={1.0}
          />
        </ViroPortalScene>
      </ViroPortalScene>
    );
  }
}

module.exports = RosePortal;

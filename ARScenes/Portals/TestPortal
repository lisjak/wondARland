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
  ViroNode,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  ViroARTrackingTargets,
} from '../../node_modules/react-viro';

const shipPortal =
  '../../assets/portal_assets/portal_res/portal_ship/portal_ship.vrx';

const portalShipDiffuse =
  '../../assets/portal_assets/portal_res/portal_ship/portal_ship_diffuse.png';

const portalShipNormal =
  '../../assets/portal_assets/portal_res/portal_ship/portal_ship_normal.png';

const portalShipSpecular =
  '../../assets/portal_assets/portal_res/portal_ship/portal_ship_specular.png';

import HeartObject from './HeartObject';

import { PortalScene2 } from './AcePortalScene2';

let count = 0;

// let createReactClass = require('../../node_modules/create-react-class');

class TestPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portalText: 'Hello There!',
      clickCount: `click count ${count}`,
      heart1: true,
    };
    this._jumpNextScene = this._jumpNextScene.bind(this);
    // this._handleClick = this._handleClick.bind(this);
  }

  _jumpNextScene() {
    this.props.arSceneNavigator.jump('scene2', { scene: PortalScene2 });
  }

  render() {
    return (
      <ViroPortalScene position={[0, 1, -1]} passable={true}>
        <ViroPortal position={[0, 0, -1]} scale={[0.5, 0.5, 0.5]}>
          <Viro3DObject
            source={require(shipPortal)}
            resources={[
              require(portalShipDiffuse),
              require(portalShipNormal),
              require(portalShipSpecular),
            ]}
            type="VRX"
          />
        </ViroPortal>
        <Viro360Video
          source={require('../../assets/portal_assets/trip2.mp4')}
          loop={true}
          paused={false}
          volume={1.0}
        />

        <HeartObject position={[1, 1, -1]} />
        <HeartObject position={[1, 1.5, -2]} />
        <HeartObject position={[-1, 1, -1]} />
      </ViroPortalScene>
    );
  }
}

module.exports = TestPortal;

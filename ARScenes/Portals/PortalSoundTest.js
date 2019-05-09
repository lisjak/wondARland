import React, { Component } from '../../node_modules/react';
import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroAmbientLight,
  ViroScene,
  Viro360Image,
  ViroImage,
  ViroAnimations,
  ViroNode,
  ViroText,
  ViroAnimatedImage,
  ViroPortal,
  ViroPortalScene,
  Viro360Video,
  ViroSound,
  ViroVideo,
  Viro3DObject,
} from '../../node_modules/react-viro';

const cheshireCat = require('../../assets/portal_assets/chesh.mp4');
const transparentCheshire = require('../../assets/portal_assets/cheshireTransparent.gif');

export default class SoundPortalTest extends Component {
  constructor() {
    super();

    // set initial state
    this.state = {
      runShowTitleAnimation: true,
      playSound: true,
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEnter() {
    this.setState({ playSound: !this.state.playSound });
  }

  handleExit() {
    this.setState({ playSound: !this.state.playSound });
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroPortalScene
          position={[0, 1, -1]}
          passable={true}
          onPortalEnter={this.handleEnter}
          onPortalExit={this.handleExit}
        >
          <ViroPortal position={[0, 0, -1]} scale={[0.5, 0.5, 0.5]}>
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

          <ViroVideo
            source={cheshireCat}
            height={4}
            width={4}
            loop={true}
            position={[0, 2, -5]}
          />
          <ViroSound
            paused={this.state.playSound}
            muted={false}
            source={require('../../assets/music/onion-capers-by-kevin-macleod.mp3')}
            loop={false}
            volume={1.0}
            // onFinish={this.onFinishSound}
            // onError={this.onErrorSound}
          />
        </ViroPortalScene>
      </ViroARScene>
    );
  }
}

module.exports = SoundPortalTest;

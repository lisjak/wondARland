import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  ViroNode,
  ViroText,
  ViroPortal,
  ViroPortalScene,
  ViroVideo,
  Viro3DObject,
  ViroMaterials,
} from 'react-viro';

import HeartObject from './HeartObject';
const cheshireCat = require('../../assets/portal_assets/chesh.mp4');

export default class QueenPortal2 extends Component {
  constructor() {
    super();

    // set initial state
    this.state = {
      runShowTitleAnimation: true,
      showPasscode: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showPasscode: true,
    });
  }

  render() {
    return (
      <ViroPortalScene position={[0, 0, 0]} passable={true}>
        <ViroPortal position={[0.5, -0.5, -0.7]} scale={[0.4, 0.4, 0.4]}>
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

        <HeartObject position={[-0.5, 1, -3]} />
        <HeartObject position={[0, 1, -4]} />
        <HeartObject position={[-2, -1, -1.5]} />
        <HeartObject position={[2, -2, -3]} />
        <HeartObject position={[-2, -1, -3]} />

        <ViroNode position={[4, 1, -4]}>
          {/* 3D Text vertion for passcode */}
          <ViroText
            style={styles.boldFont}
            position={[0, 0.1, -0.1]}
            height={3}
            extrusionDepth={3}
            materials={['frontMaterial', 'backMaterial', 'sideMaterial']}
            text="First Number of password is 9"
            visible={this.state.showPasscode}
          />

          <Viro3DObject
            source={require('../../assets/emoji_heart/emoji_heart.vrx')}
            resources={[
              require('../../assets/emoji_heart/emoji_heart_specular.png'),
              require('../../assets/emoji_heart/emoji_heart.png'),
            ]}
            position={[0, 0, -0.2]}
            scale={[0.3, 0.3, 0.3]}
            onClick={this.handleClick}
            type="VRX"
          />
        </ViroNode>
      </ViroPortalScene>
    );
  }
}

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: '#FFFFFF',
  },
  backMaterial: {
    diffuseColor: '#001D4A',
  },
  sideMaterial: {
    diffuseColor: '#7EA8BE',
  },
});

const styles = StyleSheet.create({
  boldFont: {
    color: '#FFFFFF',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  portalTextStyles: {
    fontFamily: 'Arial',
    fontSize: 28,
    color: '#C8243B',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = QueenPortal2;

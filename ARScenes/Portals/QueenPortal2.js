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
  ViroVideo,
  Viro3DObject,
  ViroMaterials,
} from '../../node_modules/react-viro';

import HeartObject from './HeartObject';

const cheshireCat = require('../../assets/portal_assets/chesh.mp4');
const transparentCheshire = require('../../assets/portal_assets/cheshireTransparent.gif');

export default class QueenPortal2 extends Component {
  constructor() {
    super();

    // set initial state
    this.state = {
      runShowTitleAnimation: true,
    };
  }

  render() {
    return (
      <ViroPortalScene position={[0, 1, -1]} passable={true}>
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

        <HeartObject position={[1, 1, -1]} />
        <HeartObject position={[2, 1.5, -2]} />
        <HeartObject position={[-1, -2, -1.5]} />

        <ViroText
          style={styles.boldFont}
          position={[-2, -4, 0.2]}
          // width={20}
          height={5}
          extrusionDepth={8}
          materials={['frontMaterial', 'backMaterial', 'sideMaterial']}
          text="1 0 0 1"
        />
      </ViroPortalScene>
    );
  }
}

var styles = StyleSheet.create({
  boldFont: {
    color: '#FFFFFF',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: '#FFFFFF',
  },
  backMaterial: {
    diffuseColor: '#FF0000',
  },
  sideMaterial: {
    diffuseColor: '#0000FF',
  },
});

module.exports = QueenPortal2;

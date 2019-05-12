import React, { Component } from 'react';

import {
  Viro3DObject,
  ViroSpotLight,
  ViroNode,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
} from 'react-viro';

import HeartObjectWithSound from './HeartObjectWithSound';
// import RoseObject from './RoseObject';

export default class SpadePortal extends Component {
  render() {
    return (
      <ViroPortalScene
        position={[0, -1, 0]}
        passable={true}
        onPortalEnter={this.handleEnterPortal1}
        onPortalExit={this.handleExitPortal1}
      >
        <ViroPortal position={[0, 0, -1]} scale={[0.5, 0.5, 0.5]}>
          <Viro3DObject
            source={require('../../assets/portal_assets/portal_wood_frame/portal_wood_frame.vrx')}
            resources={[
              require('../../assets/portal_assets/portal_wood_frame/portal_wood_frame_diffuse.png'),
              require('../../assets/portal_assets/portal_wood_frame/portal_wood_frame_normal.png'),
              require('../../assets/portal_assets/portal_wood_frame/portal_wood_frame_specular.png'),
            ]}
            type="VRX"
          />
        </ViroPortal>

        <ViroNode>
          <ViroSpotLight
            position={[0, -0.25, 0]}
            color="#777777"
            direction={[0, 0, -1]}
            attenuationStartDistance={5}
            attenuationEndDistance={10}
            innerAngle={5}
            outerAngle={20}
          />
          <Viro360Image
            source={require('../../assets/portal_assets/allblack.jpg')}
          />
        </ViroNode>

        <ViroNode position={[0, 0, -3]}>
          <HeartObjectWithSound />
          <ViroNode position={[0, 0, -5]}>
            <HeartObjectWithSound position={[0, 0, 0]} />
            <HeartObjectWithSound
              position={[0, 1, -2]}
              scale={[0.2, 0.2, 0.2]}
            />
          </ViroNode>
        </ViroNode>
      </ViroPortalScene>
    );
  }
}

module.exports = SpadePortal;

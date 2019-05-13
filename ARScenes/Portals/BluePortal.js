import React, { Component } from 'react';

import {
  Viro3DObject,
  ViroNode,
  ViroSkyBox,
  ViroPortal,
  ViroPortalScene,
} from 'react-viro';

import RandomObject from './RandomObject';

const woodFrame = require('../../assets/portal_assets/portal_wood_frame/portal_wood_frame.vrx');
const woodFrameDiffuse = require('../../assets/portal_assets/portal_res/portal_wood_frame/portal_wood_frame_diffuse.png');
const woodFrameNormal = require('../../assets/portal_assets/portal/res/portal_wood_frame/portal_wood_frame_normal.png');
const woodFrameSpecular = require('../../assets/portal_assets/portal/res/portal_wood_frame/portal_wood_frame_specular.png');
const skybox = require('../../assets/portal_assets/blue_skybox.png');

export default class ColorPortal extends Component {
  render() {
    return (
      <ViroPortalScene
        position={[0, 0, 0]}
        passable={true}
        onPortalEnter={this.handleEnterPortal1}
        onPortalExit={this.handleExitPortal1}
      >
        <ViroPortal position={[0, 0, 0]} scale={[0.6, 0.6, 0.6]}>
          <Viro3DObject
            source={woodFrame}
            resources={[woodFrameDiffuse, woodFrameNormal, woodFrameSpecular]}
            type="VRX"
          />
        </ViroPortal>
        <ViroSkyBox
          source={{
            nx: skybox,
            px: skybox,
            ny: skybox,
            py: skybox,
            nz: skybox,
            pz: skybox
          }}
        />
        <ViroNode position={[-0.02, 0, -0.05]}>
          <RandomObject />
          <ViroNode>
            <RandomObject />
            <RandomObject />
            <ViroNode>
              <RandomObject />
              <ViroNode>
                <RandomObject />
                <RandomObject />
              </ViroNode>
            </ViroNode>
          </ViroNode>
        </ViroNode>
      </ViroPortalScene>
    );
  }
}

module.exports = ColorPortal;

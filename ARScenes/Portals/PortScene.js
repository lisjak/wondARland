'use strict';

import React, { Component } from '../../node_modules/react';

import { StyleSheet } from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  ViroSpinner,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroText,
  ViroImage,
} from '../../node_modules/react-viro';

import { PortalScene2 } from './AcePortalScene2';
// import PasswordScreen from '../PasswordScreen'

import HeartObject from './HeartObject';

let count = 0;
const shipPortal =
  '../../assets/portal_assets/portal_res/portal_ship/portal_ship.vrx';

const portalShipDiffuse =
  '../../assets/portal_assets/portal_res/portal_ship/portal_ship_diffuse.png';

const portalShipNormal =
  '../../assets/portal_assets/portal_res/portal_ship/portal_ship_normal.png';

const portalShipSpecular =
  '../../assets/portal_assets/portal_res/portal_ship/portal_ship_specular.png';

class PortScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portalText: 'Hello There!',
      clickCount: `click count ${count}`,
      heart1: true,
    };
    this._onEnterPortal = this._onEnterPortal.bind(this);
    this._jumpNextScene = this._jumpNextScene.bind(this);
    // this._handleClick = this._handleClick.bind(this);
  }

  _onEnterPortal() {
    this.setState({
      portalText: 'Find the key!',
    });
  }

  //jump to second scene
  _jumpNextScene() {
    this.props.arSceneNavigator.jump('scene2', { scene: PortalScene2 });
  }

  // _handleClick() {
  //   count++,
  //     this.setState({
  //       clickCount: `click count ${count}`,
  //       heart1: false
  //     });
  // }

  // render: function() {

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" intensity={200} />

        {/* Loading Spinner for Portal */}

        <ViroPortalScene
          passable={true}
          // dragType="FixedDistance"
          // onDrag={() => {}}
          onPortalEnter={() => {
            this._onEnterPortal();
          }}
        >
          <ViroPortal position={[0, 0, -2]} scale={[0.3, 0.3, 0.3]}>
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
            source={require('../../assets/portal_assets/trippy360_480p.mp4')}
            loop={true}
            paused={false}
            volume={1.0}
          />

          {/* <ViroPortalScene
            passable={true}
            // dragType="FixedDistance"
            // onDrag={() => {}}
            onPortalEnter={() => {
              this._onEnterPortal();
            }}
          >
            <ViroPortal position={[-2, 0, -5]} scale={[0.3, 0.3, 0.3]}>
              <Viro3DObject
                source={require(shipPortal)}
                resources={[
                  require(portalShipDiffuse),
                  require(portalShipNormal),
                  require(portalShipSpecular)
                ]}
                type="VRX"
              />
            </ViroPortal>
            <Viro360Image
              source={require("../../assets/portal_assets/360_space.jpg")}
            />

            <Viro3DObject
              source={require("../../assets/res/viro_objects_animated/emoji_heart_anim/emoji_heart_anim.vrx")}
              resources={[
                require("../../assets/res/viro_objects_animated/emoji_heart_anim/emoji_heart_specular.png"),
                require("../../assets/res/viro_objects_animated/emoji_heart_anim/emoji_heart.png")
              ]}
              position={[0, 3, -5]}
              scale={[2, 2, 2]}
              //   rotation={[45, 0, 0]}
              type="VRX"
              //   transformBehaviors={['billboard']}
            />
          </ViroPortalScene>

          <ViroPortalScene
            passable={true}
            // dragType="FixedDistance"
            // onDrag={() => {}}
            onPortalEnter={() => {
              this._onEnterPortal();
            }}
          >
            <ViroPortal position={[2, 0, -5]} scale={[0.3, 0.3, 0.3]}>
              <Viro3DObject
                source={require(shipPortal)}
                resources={[
                  require(portalShipDiffuse),
                  require(portalShipNormal),
                  require(portalShipSpecular)
                ]}
                type="VRX"
              />
            </ViroPortal>
            <Viro360Image
              source={require("../../assets/portal_assets/360_tiles.jpg")}
            />
          </ViroPortalScene>

          {/* <ViroImage
            source={require('../res/Clickme.jpg')}
            position={[2, 2, -4]}
            scale={[0.3, 0.3, 0.3]}
            onClick={this._jumpNextScene}
          /> */}
          <ViroText
            text={this.state.portalText}
            width={2}
            height={2}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0.4, -3]}
            style={styles.portalTextStyles}
          />
          {/* <ViroImage
            source={require('../res/signExit.png')}
            position={[1, 1, -3]}
            scale={[0.1, 0.1, 0.1]}
            onClick={this._handleClick}
          /> */}
          <HeartObject position={[1, 1, -1]} />
          <HeartObject position={[1, 1.5, -2]} />
          <HeartObject position={[-1, 1, -1]} />
        </ViroPortalScene>
      </ViroARScene>
    );
  }
}

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#C8243B',
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

module.exports = PortScene;

'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroText,
} from 'react-viro';

// var createReactClass = require('create-react-class');
// var MainScene = createReactClass({
class MainScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portalText: 'Hello There!',
    };
  }

  // render: function() {
  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}
        >
          <ViroPortal position={[0, 0, -1]} scale={[0.5, 0.5, 0.5]}>
            <Viro3DObject
              source={require('./portal_res/portal_ship/portal_ship.vrx')}
              resources={[
                require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                require('./portal_res/portal_ship/portal_ship_normal.png'),
                require('./portal_res/portal_ship/portal_ship_specular.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image source={require('./portal_res/360_island.jpg')} />
          <ViroText
            text={this.state.portalText}
            width={2}
            height={2}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0.4, -3]}
            style={styles.portalTextStyles}
          />
        </ViroPortalScene>

        {/* <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}
        >
          <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>
            <Viro3DObject
              source={require('./portal_res/portal_ship/portal_ship.vrx')}
              resources={[
                require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                require('./portal_res/portal_ship/portal_ship_normal.png'),
                require('./portal_res/portal_ship/portal_ship_specular.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image source={require('./portal_res/360_island.jpg')} />
        </ViroPortalScene> */}
      </ViroARScene>
    );
  }
}

const styles = StyleSheet.create({
  // helloWorldTextStyle: {
  //   fontFamily: 'IM Fell English',
  //   fontSize: 20,
  //   color: '#C8243B',
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  // },
  portalTextStyles: {
    fontFamily: 'IM Fell English',
    fontSize: 28,
    color: '#C8243B',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = MainScene;

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
  Viro3DObject
} from '../../node_modules/react-viro';


const cheshireCat = require('../../assets/portal_assets/cheshirecatsmile.png');

export default class ThreeOfHearts extends Component {
  constructor() {
    super();

    // set initial state
    this.state = {
      runShowTitleAnimation: true,
    };

    // bind `this` to functions
    this._onBackgroundPhotoLoadEnd = this._onBackgroundPhotoLoadEnd.bind(this);
    // this._onTitleClicked = this._onTitleClicked.bind(this);
  }

  render() {
    return (
      <ViroPortalScene
        position={[0, 1, -1]}
        passable={true}
      >
      <ViroPortal position={[0, 0, -2]} scale={[0.5, 0.5, 0.5]}>
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





      <ViroParticleEmitter
  position={[0, 4.5, 0]}
  duration={2000}
  run={true}

  image={{
    source:require("./res/particle_snow.png"),
    height:0.1,
    width:0.1,
  }}
/>


  _onBackgroundPhotoLoadEnd() {
    this.setState({
      runShowTitleAnimation: true,
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


module.exports = ThreeOfHearts;

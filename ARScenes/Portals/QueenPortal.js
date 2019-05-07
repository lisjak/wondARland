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

export default class MainScene extends Component {
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

      <ViroAnimatedImage
        position={[0, 1, -10]}
        // source={cheshireCat}
        scale={[30, 30, 30]}
        // opacity={0.0}
        // onClick={this._onTitleClicked}
        animation={{
          name: 'showTitleAnimation',
          run: true,
          loop: true,
          delay: 0
        }}
        height={2}
        width={2}
        source={cheshireCat}
      />

        <Viro360Image
          // onLoadEnd={this._onBackgroundPhotoLoadEnd}
          source={require('../../assets/portal_assets/allblack.jpg')}
        />
      </ViroPortalScene>
    );
  }

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

/**
 * Declare all your animations here. They'll be referenced by the animation props.
 */
ViroAnimations.registerAnimations({
  showTitleAnimation: {
    properties: { scaleX: 2, scaleY: 2, scaleZ: 2, opacity: 1.0 },
    easing: 'PowerDecel',
    duration: 1000,
  },
});

module.exports = MainScene;

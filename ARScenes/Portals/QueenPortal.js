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
  Viro3DObject,
  ViroSound,
} from '../../node_modules/react-viro';

const cheshireCat = require('../../assets/portal_assets/cheshirecatsmile.png');

export default class MainScene extends Component {
  constructor() {
    super();

    // set initial state
    this.state = {
      runShowTitleAnimation: true,
      playPortal1Sound: true,
      showText: false,
    };

    // bind `this` to functions
    this._onBackgroundPhotoLoadEnd = this._onBackgroundPhotoLoadEnd.bind(this);
    this.handleEnterPortal1 = this.handleEnterPortal1.bind(this);
    this.handleExitPortal1 = this.handleExitPortal1.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this._onTitleClicked = this._onTitleClicked.bind(this);
  }

  handleClick() {
    this.setState({ showText: true });
  }
  handleEnterPortal1() {
    this.setState({ playPortal1Sound: false });
  }

  handleExitPortal1() {
    this.setState({ playPortal1Sound: true });
  }
  render() {
    return (
      <ViroPortalScene
        position={[0, 1, -1]}
        passable={true}
        onPortalEnter={this.handleEnterPortal1}
        onPortalExit={this.handleExitPortal1}
      >
        <ViroPortal position={[0, 1, -1]} scale={[0.5, 0.5, 0.5]}>
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
            delay: 0,
          }}
          height={2}
          width={2}
          source={cheshireCat}
        />

        <Viro360Image
          // onLoadEnd={this._onBackgroundPhotoLoadEnd}
          source={require('../../assets/portal_assets/allblack.jpg')}
        />
        <ViroNode position={[1, 1, -1]}>
          <ViroText
            text="Oops, this is a dead end!"
            width={2}
            height={2}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 1, -2]}
            style={styles.portalTextStyles}
            visible={this.state.showText}
          />

          <Viro3DObject
            source={require('../../assets/emoji_heart/emoji_heart.vrx')}
            resources={[
              require('../../assets/emoji_heart/emoji_heart_specular.png'),
              require('../../assets/emoji_heart/emoji_heart.png'),
            ]}
            position={[0, 0, -1]}
            scale={[0.3, 0.3, 0.3]}
            onClick={this.handleClick}
            type="VRX"
          />
        </ViroNode>
        <ViroSound
          paused={this.state.playPortal1Sound}
          muted={false}
          source={require('../../aassets/music/giant-wyrm-by-kevin-macleod.mp3')}
          loop={true}
          volume={1.0}
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
  portalTextStyles: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#C8243B',
    textAlignVertical: 'center',
    textAlign: 'center',
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

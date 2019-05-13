import React, { Component } from '../../node_modules/react';
import { StyleSheet, Text, View } from 'react-native';

import {
  Viro3DObject,
  ViroSound,
  ViroNode,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  ViroText,
  ViroMaterials,
} from '../../node_modules/react-viro';

export default class DeadEndforRosePortal extends Component {
  constructor() {
    super();
    this.state = {
      playPortal1Sound: true,
      showText: false,
    };
    this.handleEnterPortal1 = this.handleEnterPortal1.bind(this);
    this.handleExitPortal1 = this.handleExitPortal1.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleEnterPortal1() {
    this.setState({ playPortal1Sound: false });
  }

  handleExitPortal1() {
    this.setState({ playPortal1Sound: true });
  }
  handleClick() {
    this.setState({ showText: true });
  }

  render() {
    return (
      <ViroPortalScene
        position={[-3, 0, -3]}
        passable={true}
        onPortalEnter={this.handleEnterPortal1}
        onPortalExit={this.handleExitPortal1}
      >
        <ViroPortal position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
          <Viro3DObject
            source={require('../../assets/portal_assets/portal_res/portal_wood_frame/portal_wood_frame.vrx')}
            resources={[
              require('../../assets/portal_assets/portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
              require('../../assets/portal_assets/portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
              require('../../assets/portal_assets/portal_res/portal_wood_frame/portal_wood_frame_specular.png'),
            ]}
            type="VRX"
          />
        </ViroPortal>
        <Viro360Image
          source={require('../../assets/portal_assets/360maze.jpg')}
        />
        <ViroNode position={[1, 1, -1]}>
          <ViroText
            text="Oops, this is a dead end!"
            // width={2}
            height={5}
            scale={[0.5, 0.5, 0.5]}
            extrusionDepth={8}
            materials={['frontMaterial', 'backMaterial', 'sideMaterial']}
            position={[0, 1, -2]}
            style={styles.boldFont}
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
        {/* <HeartObject position={[1, 1, -3]} />
        <HeartObject position={[0, 2, -5]} />
        <HeartObject position={[2, -1, -4]} />
        <HeartObject position={[0, 4, -1]} /> */}
        {/* <RoseObject position={[-3, 2, -5]} scale={[0.02, 0.02, 0.02]} /> */}

        <ViroSound
          paused={this.state.playPortal1Sound}
          muted={false}
          source={require('../../assets/music/comfortable-mystery-trimmed.wav')}
          loop={true}
          volume={1.0}
        />
      </ViroPortalScene>
    );
  }
}

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#C8243B',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
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

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: '#FFFFFF',
  },
  backMaterial: {
    diffuseColor: '#008080',
  },
  sideMaterial: {
    diffuseColor: '#cd5c5c',
  },
});

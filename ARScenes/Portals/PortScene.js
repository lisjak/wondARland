import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  Viro360Video,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroText,
  ViroNode,
  ViroMaterials,
} from 'react-viro';

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

export class PortScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portalText: 'Down the rabbit hole...',
      showPasscode: false,
      portalSound: true,
    };
    this._onEnterPortal = this._onEnterPortal.bind(this);
    this.handlePortalEnter = this.handlePortalEnter.bind(this);
    this.handlePortalExit = this.handlePortalExit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  _onEnterPortal() {
    // this.props.enterPortal();
    this.setState({
      portalText: 'Down the rabbit hole...',
    });
  }

  handlePortalEnter() {
    this.setState({
      portalText: 'Down the rabbit hole...',
      portalSound: false,
    });
  }

  handlePortalExit() {
    this.setState({
      portalSound: true,
    });
  }
  handleClick() {
    this.setState({ showPasscode: true });
  }

  render() {
    const passcode = this.props.passcode;
    return (
      <ViroPortalScene
        // position={[0, 0, 0]}
        passable={true}
        onPortalEnter={this.handlePortalEnter}
        onPortalExit={this.handlePortalExit}
      >
        <ViroPortal position={[0.2, 0.3, -0.8]} scale={[0.2, 0.2, 0.2]}>
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
          source={require('../../assets/portal_assets/2ndtrip.mp4')}
          loop={true}
          paused={false}
          volume={1.0}
          muted={this.state.portalSound}
        />

        <ViroPortalScene
          passable={true}
          onPortalEnter={() => {
            this._onEnterPortal();
          }}
        >
          <ViroPortal position={[-1, 0, -1]} scale={[0.2, 0.2, 0.2]}>
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
          <Viro360Image
            source={require('../../assets/portal_assets/360_space.jpg')}
          />
        </ViroPortalScene>
        <ViroPortalScene
          passable={true}
          onPortalEnter={() => {
            this._onEnterPortal();
          }}
        >
          <ViroPortal position={[1, 0.4, 1.4]} scale={[0.2, 0.2, 0.2]}>
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
          <Viro360Image
            source={require('../../assets/portal_assets/360_tiles.jpg')}
          />
          <ViroNode position={[2, 0, -3]}>
            {/* 3D Text vertion for passcode */}
            <ViroText
              style={styles.boldFont}
              position={[1, 0.4, -0.1]}
              height={3}
              extrusionDepth={3}
              materials={['frontMaterial', 'backMaterial', 'sideMaterial']}
              text={`The third number of the passcode: ${passcode[2]}`}
              visible={this.state.showPasscode}
            />

            <Viro3DObject
              source={require('../../assets/emoji_heart/emoji_heart.vrx')}
              resources={[
                require('../../assets/emoji_heart/emoji_heart_specular.png'),
                require('../../assets/emoji_heart/emoji_heart.png'),
              ]}
              position={[1, 0.5, -0.2]}
              scale={[0.3, 0.3, 0.3]}
              onClick={this.handleClick}
              type="VRX"
            />
          </ViroNode>
        </ViroPortalScene>

        <ViroText
          text={this.state.portalText}
          width={2}
          height={2}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0.4, -3]}
          style={styles.portalTextStyles}
        />

        <ViroText
          text={this.state.portalText}
          width={2}
          height={2}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0.4, -3]}
          outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
          style={styles.portalTextStyles}
        />

        <HeartObject position={[2, 2, -3]} />
        <HeartObject position={[1, 1.5, -5]} />
        <HeartObject position={[-1, 1, -4]} />
      </ViroPortalScene>
    );
  }
}

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: '#6E7E85',
  },
  backMaterial: {
    diffuseColor: '#B7B7B7',
  },
  sideMaterial: {
    diffuseColor: '#FEFFFE',
  },
});

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  portalTextStyles: {
    fontFamily: 'Arial',
    fontSize: 28,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  boldFont: {
    color: '#6E7E85',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

const mapState = state => {
  return {
    passcode: state.game.passcode,
  };
};

export default connect(
  mapState,
  null
)(PortScene);
// module.exports = PortScene;

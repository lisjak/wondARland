import React, { Component } from 'react';
import { StyleSheet, Vibration } from 'react-native';

import PortScene from '../Portals/PortScene';
import QueenPortal2 from '../Portals/QueenPortal2';
import DiamondPortal from '../Portals/RosesPortal';

import {
  ViroARScene,
  ViroSpinner,
  ViroText,
  ViroARImageMarker,
  ViroAmbientLight,
  ViroNode,
  ViroAnimatedImage,
  ViroARTrackingTargets,
  ViroConstants,
} from 'react-viro';

const transparentCheshire = require('../../assets/portal_assets/cheshireTransparent.gif');
// const transparentCheshire = require('../../assets/portal_assets/cartoonchesh.gif');
const tumble = require('../../assets/portal_assets/tumble.gif');
const rose = require('../../assets/portal_assets/rose.gif');
const rabbit = require('../../assets/portal_assets/rabbit.gif');

class FindingCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playAnim: false,
      visible: true,
    };
    this._onInitialized = this._onInitialized.bind(this);
    this._isPortalLoading = this._isPortalLoading.bind(this);
    this._onAnchorFound = this._onAnchorFound.bind(this);
  }

  // Text update when AR initialized
  _onInitialized() {
    if (this.state === ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: `Portal incoming...`,
        visible: false,
      });
    }
  }

  _onAnchorFound() {
    this.setState({
      playAnim: true,
      visible: true,
    });
    Vibration.vibrate(1, false);
  }

  _isPortalLoading() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        {/***************-Queen Card************************************/}
        <ViroARImageMarker target="queen" onAnchorFound={this._onAnchorFound}>
          <ViroNode
            scale={[1, 1, 1]}
            transformBehaviors={['billboardX']}
            rotation={[0, -180, 0]}
          >
            <ViroText
              width={2}
              height={3}
              position={[0, 0, -1]}
              textAlign="center"
              textClipMode="ClipToBounds"
              text="Card found! Look around for a portal!"
              outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
              scale={[0.5, 0.5, 0.5]}
              style={styles.textStyle}
              visible={this.state.visible}
            />
          </ViroNode>

          <ViroNode scale={[1, 1, 1]} transformBehaviors={['billboardX']}>
            <ViroAnimatedImage
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              animation={{
                run: this.state.playAnim,
                loop: true,
                delay: 0,
              }}
              height={0.5}
              width={0.5}
              source={transparentCheshire}
            />
          </ViroNode>

          <ViroSpinner
            type="light"
            position={[0, 0, -2]}
            visible={this.state.isLoading}
          />

          <QueenPortal2
            onLoadEnd={() => {
              this.setState({
                isLoading: false,
                isPortalRendered: true,
              });
            }}
          />
        </ViroARImageMarker>

        {/***************-Joker Card************************************/}
        <ViroARImageMarker target="joker" onAnchorFound={this._onAnchorFound}>
          <ViroNode
            scale={[1, 1, 1]}
            transformBehaviors={['billboardX']}
            rotation={[0, -180, 0]}
          >
            <ViroText
              width={2}
              height={3}
              position={[0, 0, -1]}
              textAlign="center"
              textClipMode="ClipToBounds"
              text="Card found! Look around for a portal!"
              outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
              scale={[0.5, 0.5, 0.5]}
              style={styles.textStyle}
              visible={this.state.visible}
            />
          </ViroNode>

          <ViroNode scale={[1, 1, 1]} transformBehaviors={['billboardX']}>
            <ViroAnimatedImage
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              animation={{
                run: true,
                loop: true,
                delay: 0,
              }}
              height={0.5}
              width={0.5}
              source={tumble}
            />
          </ViroNode>

          <PortScene
            onLoadEnd={() => {
              this.setState({
                isLoading: false,
                isPortalRendered: true,
              });
            }}
          />
        </ViroARImageMarker>

        {/***************-Spades Card************************************/}
        <ViroARImageMarker target="spades" onAnchorFound={this._onAnchorFound}>
          <ViroNode
            scale={[1, 1, 1]}
            transformBehaviors={['billboardX']}
            rotation={[0, -180, 0]}
          >
            <ViroText
              width={2}
              height={3}
              position={[0, 0, -1]}
              textAlign="center"
              textClipMode="ClipToBounds"
              text="Card found! Look around for a portal!"
              outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
              scale={[0.5, 0.5, 0.5]}
              style={styles.textStyle}
              visible={this.state.visible}
            />
          </ViroNode>

          <ViroNode scale={[1, 1, 1]} transformBehaviors={['billboardX']}>
            <ViroAnimatedImage
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              animation={{
                run: true,
                loop: true,
                delay: 0,
              }}
              height={0.2}
              width={0.2}
              source={rose}
            />
          </ViroNode>
          <PortScene
            onLoadEnd={() => {
              this.setState({
                isLoading: false,
                isPortalRendered: true,
              });
            }}
          />
        </ViroARImageMarker>

        {/***************-Diamond Card************************************/}
        <ViroARImageMarker target="diamond" onAnchorFound={this._onAnchorFound}>
          <ViroNode
            scale={[1, 1, 1]}
            transformBehaviors={['billboardX']}
            rotation={[0, -180, 0]}
          >
            <ViroText
              width={2}
              height={3}
              position={[0, 0, -1]}
              textAlign="center"
              textClipMode="ClipToBounds"
              text="Card found! Look around for a portal!"
              outerStroke={{ type: 'Outline', width: 2, color: '#000000' }}
              scale={[0.5, 0.5, 0.5]}
              style={styles.textStyle}
              visible={this.state.visible}
            />
          </ViroNode>

          {/* <ViroNode scale={[1, 1, 1]} transformBehaviors={['billboardX']}>
            <ViroAnimatedImage
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              animation={{
                run: true,
                loop: true,
                delay: 0,
              }}
              height={0.2}
              width={0.2}
              source={rabbit}
            />
          </ViroNode> */}

          {/* <ViroSpinner
            type="light"
            position={[0, 0, -2]}
            visible={this.state.isLoading}
          /> */}

          <DiamondPortal
            onLoadEnd={() => {
              this.setState({
                isLoading: false,
                isPortalRendered: true,
              });
            }}
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  }
}

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
    color: '#C8243B',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroARTrackingTargets.createTargets({
  queen: {
    source: require('../../assets/target_markers_assets/queen.jpg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

ViroARTrackingTargets.createTargets({
  ace: {
    source: require('../../assets/target_markers_assets/ace.jpg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

ViroARTrackingTargets.createTargets({
  diamond: {
    source: require('../../assets/target_markers_assets/diamond.jpg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

ViroARTrackingTargets.createTargets({
  joker: {
    source: require('../../assets/target_markers_assets/sjoker.jpg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

ViroARTrackingTargets.createTargets({
  spades: {
    source: require('../../assets/target_markers_assets/spades.jpeg'),
    orientation: 'Up',
    physicalWidth: 0.08, // real world width in meters
  },
});

module.exports = FindingCards;

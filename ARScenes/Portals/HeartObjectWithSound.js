import React, { Component } from 'react';

import { Vibration } from 'react-native';

import {
  Viro3DObject,
  ViroScene,
  ViroNode,
  ViroSpatialSound, 
} from 'react-viro';

import { connect } from 'react-redux';
import { pointFoundThunk } from '../../store/gameReducer';

class HeartObjectWithSound extends Component {
  constructor() {
    super();
    this.state = {
      visibility: true,
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({
      visibility: false,
    });
    Vibration.vibrate(1, false);
    this.props.pointFound();
  }

  render() {
    return (
      <ViroScene>
        <ViroNode>
          <Viro3DObject
            source={require('../../assets/emoji_heart/emoji_heart.vrx')}
            resources={[
              require('../../assets/emoji_heart/emoji_heart_specular.png'),
              require('../../assets/emoji_heart/emoji_heart.png'),
            ]}
            position={this.props.position}
            scale={[0.3, 0.3, 0.3]}
            onClick={this._handleClick}
            visible={this.state.visibility}
            type="VRX"
          />
          <ViroSpatialSound
            rolloffModel="linear"
            paused={false}
            muted={false}
            minDistance={5}
            maxDistance={8}
            position={[0, 0, 0]}
            source={require('../../assets/music/heartbeat.wav')}
            loop={true}
            volume={1.0}
          />
        </ViroNode>
      </ViroScene>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    pointFound: () => dispatch(pointFoundThunk()),
  };
};

export default connect(
  null,
  mapDispatch
)(HeartObjectWithSound);

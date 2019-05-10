import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Vibration } from 'react-native';

import { Viro3DObject } from 'react-viro';

import { connect } from 'react-redux';
import { pointFoundThunk } from '../../store/gameReducer';

class HeartObject extends Component {
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
)(HeartObject);

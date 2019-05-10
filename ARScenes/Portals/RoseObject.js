import React, { Component } from "react";

import { Vibration } from "react-native";

import { Viro3DObject } from "react-viro";

import { connect } from "react-redux";
import { roseFoundThunk } from "../../store/gameReducer";

class RoseObject extends Component {
  constructor() {
    super();
    this.state = {
      visibility: true
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({
      visibility: false
    });
    Vibration.vibrate(1, false);
    this.props.rosepointFound();
  }

  render() {
    return (
      <Viro3DObject
        source={require("../../assets/res/rose/rose.vrx")}
        resources={[
          require("../../assets/res/rose/texture-green-paper-pattern-scratch-background-photo-hd-wallpaper.jpg"),
          require("../../assets/res/rose/grass_texture225.jpg"),
          require("../../assets/res/rose/wildtextures-leather-Campo-rose.jpg")
        ]}
        position={this.props.position}
        scale={this.props.scale}
        onClick={this._handleClick}
        visible={this.state.visibility}
        type="VRX"
      />
    );
  }
}

const mapDispatch = dispatch => {
  return {
    rosepointFound: () => dispatch(roseFoundThunk())
  };
};

export default connect(
  null,
  mapDispatch
)(RoseObject);

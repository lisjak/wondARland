import React, { Component } from 'react';
import { Vibration } from 'react-native';
import { Viro3DObject } from 'react-viro';
import { connect } from 'react-redux';
import { pointFoundThunk } from '../../store/gameReducer';
import { randomNum, randomInt } from '../utils';
import { objects } from './objects';

const object = randomInt(1, Object.keys(objects).length);
const objectSource = objects[object].source;
const objectResources = [
  objects[object].res1,
  objects[object].res2,
  objects[object].res3,
].filter(item => item);
const objectType = objects[object].type;

const x = randomNum(-2, 3);
const y = randomNum(0, 1);
const z = randomNum(-3, 3);
const scale = randomNum(0.01, objects[object].maxScale);

class RandomObject extends Component {
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
        source={objectSource}
        resources={objectResources}
        position={[x, y, z]}
        scale={[scale, scale, scale]}
        onClick={this._handleClick}
        visible={this.state.visibility}
        type={objectType}
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
)(RandomObject);

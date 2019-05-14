import React, { Component } from 'react';
import { Vibration } from 'react-native';
import { Viro3DObject } from 'react-viro';
import { connect } from 'react-redux';
import { pointFoundThunk } from '../../store/gameReducer';
import firebase from 'firebase';

class HeartObject extends Component {
  constructor() {
    super();
    this.state = {
      visibility: true,
    };
    this._handleClick = this._handleClick.bind(this);
    this.savePoints = this.savePoints.bind(this);
  }

  componentDidMount() {}

  savePoints() {
    const user = firebase.auth().currentUser;
    const { pointsFound, pointFoundThunk } = this.props;
    try {
      pointFoundThunk();
      firebase
        .firestore()
        .collection('users')
        .doc(user.email).set({ pointsFound: pointsFound }, {merge: true})
    } catch (error) {
      console.log(error);
    }
  }

  _handleClick() {
    this.setState({
      visibility: false,
    });
    Vibration.vibrate(1, false);
    this.props.pointFound();
    this.savePoints();
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

const mapState = state => {
  return {
    pointsFound: state.game.pointsFound,
  };
};

const mapDispatch = dispatch => {
  return {
    pointFound: () => dispatch(pointFoundThunk()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(HeartObject);

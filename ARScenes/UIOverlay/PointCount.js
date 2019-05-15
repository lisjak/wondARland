import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { pointFoundThunk } from '../../store/gameReducer';
import { Button } from 'react-native-material-ui';
import firebase from 'firebase'


class PointCount extends Component {
  constructor() {
    super();
  }

  render() {
    const { pointsFound } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`\u2665 ${pointsFound}`}</Text>
      </View>
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
    pointFoundThunk: () => dispatch(pointFoundThunk()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(PointCount);

const styles = StyleSheet.create({
  container: {
    // flex: .4,
    // alignItems: 'center',
    // textAlign: 'center',
    // backgroundColor: 'rgba(198, 77, 7, 0.8)',
    // borderRadius: 10,
  },

  text: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 24,
    color: 'white',
  },
});

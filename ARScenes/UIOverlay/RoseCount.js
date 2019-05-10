import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { roseFoundThunk } from '../../store/gameReducer';

class RoseCount extends Component {
  render() {
    const { rosesFound } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`\u1F339 ${rosesFound}`}</Text>
      </View>
    );
  }
}

const mapState = state => {
  return {
    rosesFound: state.game.rosesFound,
  };
};

const mapDispatch = dispatch => {
  return {
    roseFound: () => dispatch(roseFoundThunk()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(RoseCount);

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

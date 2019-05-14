import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { pointFoundThunk } from '../../store/gameReducer';

class PointCount extends Component {
  render() {
    const { pointsFound, pointFound } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`\u{1F339} ${pointsFound}`}</Text>
        {/* <Button title="+1" onPress={() => pointFound()} /> */}
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
    pointFound: () => dispatch(pointFoundThunk()),
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

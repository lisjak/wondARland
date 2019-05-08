import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from './Timer';
import { connect } from 'react-redux';
import { gamePausedThunk } from '../../store/gameReducer';
import PasswordButton from './Button';
import { Subheader, Button } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    alignItems: 'center',
    // backgroundColor: 'rgba(52, 52, 52, 0.7)',
    backgroundColor: 'transparent',
  },
  rowContainer: {
    flex: 0.15,
    // alignItems: 'center',
    // margin: -0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
  button: {
    // marginHorizontal: 0.4,
    backgroundColor: 'transparent',
  },
});

class ButtonBar extends Component {
  constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { history, pauseGame } = this.props;
    pauseGame();
    history.push('/password');
  }

  render() {
    return (
      <View style={styles.rowContainer}>
        {/* <View style={styles.rowContainer}> */}
        <Timer history={this.props.history} />
        {/* <View style={styles.rowContainer}> */}
        <Button accent text="enter password" onPress={this.handlePress} />
      </View>
      // </View>
      // </View>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    pauseGame: () => dispatch(gamePausedThunk()),
  };
};

export default connect(
  null,
  mapDispatch
)(ButtonBar);

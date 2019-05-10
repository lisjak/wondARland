import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gamePausedThunk, gameEndedThunk } from '../../store/gameReducer';
import { Button } from 'react-native-material-ui';
import Timer from './Timer';
import PointCount from './PointCount';
import RoseCount from './RoseCount';

class ButtonBar extends Component {
  constructor() {
    super();
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handlePassword() {
    const { history, pauseGame } = this.props;
    pauseGame();
    history.push('/password');
  }

  handlePause() {
    const { history, pauseGame } = this.props;
    pauseGame();
    history.push('/pause');
  }

  handleResume() {
    const { history, resumeGame } = this.props;
    resumeGame();
    history.goBack();
  }

  handleExit() {
    const { history, endGame } = this.props;
    endGame();
    history.push('/');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Timer history={this.props.history} />
          <RoseCount />
          <PointCount />
        </View>
        <View style={styles.secondRowContainer}>
          <Button accent text="enter password" onPress={this.handlePassword} />
          <Button accent text="pause" onPress={this.handlePause} />
          <Button accent text="exit" onPress={this.handleExit} />
        </View>
      </View>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    pauseGame: () => dispatch(gamePausedThunk()),
    endGame: () => dispatch(gameEndedThunk()),
  };
};

export default connect(
  null,
  mapDispatch
)(ButtonBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center'
  },
});

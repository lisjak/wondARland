/* eslint-disable no-alert */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {
  gamePausedThunk,
  gameEndedThunk,
  gameResumedThunk,
} from '../../store/gameReducer';
import { Button } from 'react-native-material-ui';
import styles from './styles';
import Timer from './Timer';
import PointCount from './PointCount';

class ButtonBar extends Component {
  constructor() {
    super();
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleStuck = this.handleStuck.bind(this);
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

  handleStuck() {
    const { history, pauseGame } = this.props;
    pauseGame();
    history.push('/stuck');
  }

  handleExit() {
    const { history, endGame } = this.props;
    endGame();
    history.push('/');
  }

  render() {
    const { history } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Timer history={history} />
          <PointCount />
        </View>
        <View style={styles.secondRowContainer}>
          <Button accent text="enter password" onPress={this.handlePassword} />
          <Button accent text="I'm stuck!" onPress={this.handleStuck} />
          <Button accent text="quit" onPress={this.handleExit} />
        </View>
      </View>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    pauseGame: () => dispatch(gamePausedThunk()),
    endGame: () => dispatch(gameEndedThunk()),
    resumeGame: () => dispatch(gameResumedThunk()),
  };
};

export default connect(
  null,
  mapDispatch
)(ButtonBar);

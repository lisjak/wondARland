import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
import styles from './styles'

class Timer extends Component {

  handleStart() {
    const { history, resumeGame } = this.props;
    resumeGame();
    history.goBack();
  }

  render() {
    const { history } = this.props;
    return (
      <View style={{alignItems: 'center'}}>
        <TimerCountdown
          initialMilliseconds={this.props.timeRemaining}
          onExpire={() => history.push(`/loser`)}
          formatMilliseconds={milliseconds => {
            const remainingSec = Math.round(milliseconds / 1000);
            const seconds = parseInt((remainingSec % 60).toString(), 10);
            const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
            const s = seconds < 10 ? '0' + seconds : seconds;
            const m = minutes < 10 ? '0' + minutes : minutes;
            return m + ':' + s;
          }}
          allowFontScaling={true}
          style={styles.timerText}
        />
      </View>
    );
  }
}
const mapState = state => {
  return {
    timeRemaining: state.game.timeRemaining,
  };
};

export default connect(
  mapState,
  null
)(Timer);

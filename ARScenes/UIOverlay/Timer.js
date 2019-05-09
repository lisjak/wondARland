import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, View } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';

class Timer extends Component {
  handleStart() {
    const { history, resumeGame } = this.props;
    resumeGame();
    history.goBack();
  }

  render() {
    const { history } = this.props;
    return (
      <View style={styles.container}>
        <TimerCountdown
          initialMilliseconds={this.props.timeRemaining}
          onExpire={() => history.push('/loser')}
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // backgroundColor: 'rgba(198, 77, 7, 0.8)',
    // borderRadius: 10
  },

  timerText: {
    // position: 'absolute',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 36,
    color: 'white',
  },
});

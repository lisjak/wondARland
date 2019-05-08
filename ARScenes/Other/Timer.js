import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';

class Timer extends Component {
  render() {
    const { history } = this.props;
    return (
      <View style={styles.container}>
        <TimerCountdown
          initialMilliseconds={1000 * 5}
          onTick={milliseconds => console.log('tick', milliseconds)}
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

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },

  timerText: {
    position: 'absolute',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    fontSize: 36,
    color: 'white',
  },
});

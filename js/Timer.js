import React from 'react';
import { StyleSheet, View } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';

const Timer = () => (
  <View style={styles.container}>
    <TimerCountdown
      initialMilliseconds={1000 * 5}
      onTick={milliseconds => console.log('tick', milliseconds)}
      onExpire={() => alert("time's up")}
      // onExpire={() => this.props.navigation.navigate('Loser')}
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

const styles = StyleSheet.create({
  container: {
    flex: 0.08,
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

export default Timer;

import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class PasswordButton extends Component {
  render() {
    const { history } = this.props;
    return (
      <View>
        <Button
          title="enter password"
          onPress={() => history.push('/password')}
        />
      </View>
    );
  }
}

export default PasswordButton;

const styles = StyleSheet.create({
  container: {
    flex: 0.08,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },

  timerText: {
    position: 'absolute',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 36,
    color: 'white',
  },
});

import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class PasswordButton extends Component {
  state = { isPressed: false };
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

const enterPasswordScreen = () => {
  // this.setState
  // hisotry.push
}



class B extends Component {
  state = { isPressed: false };
  render() {
    return (
      <View styles={{ flex: 1 }}>
        <Button
          title={`${this.state.isPressed ? "Button Pressed" : "Button"}`}
          onPress={() => {
            this.setState({ isPressed: true });
          }}
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
    fontFamily: 'Helvetica Neue',
    fontSize: 36,
    color: 'white',
  },
});

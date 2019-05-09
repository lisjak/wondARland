import React, { Component } from 'react';
import { View, Button } from 'react-native';

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

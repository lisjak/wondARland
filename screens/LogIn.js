import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button title="go back" onPress={() => history.push('/')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
  },
});

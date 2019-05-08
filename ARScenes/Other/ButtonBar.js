import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from './Timer';
import PasswordButton from './Button';

export default class Login extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <View style={styles.container}>
        <Timer style={styles.items} history={history} />
        <PasswordButton style={styles.items} history={history} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.12,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  items: {
    // justifyContent: 'space-between',
  },
});

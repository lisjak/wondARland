import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Input } from './LoginInput';
import firebase from 'firebase';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: '',
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    this.setState({ loading: true });
    const { email, password } = this.state;
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({
            loading: false,
            error: '',
          });
          this.props.history.push('/');
        });
    } catch (error) {
      this.setState({
        loading: false,
        error: 'Cannot authenticate',
      });
    }
  }

  renderCurrentState() {
    if (this.state.loading) {
      return (
        // <View style={styles.form}>
        <ActivityIndicator size="large" />
        // </View>
      );
    }
    return (
      <View style={styles.form}>
        <Input
          placeholder={'Enter your email'}
          label={'Email'}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder={'Enter your password'}
          label={'Password'}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableHighlight
          style={styles.buttons}
          onPress={this.onLogin}
          underlayColor="#04152b"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttons}
          onPress={() => this.props.history.push('/')}
          underlayColor="#04152b"
        >
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderCurrentState()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    height: 50,
    width: 160,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ac3c0b',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    marginBottom: 15,
    padding: 20,
  },
});

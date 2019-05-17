import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Keyboard,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { gameResumedThunk } from '../store/gameReducer';
import Message from './MessageScreen';
// import styles from './styles'

class PasswordScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstcode: '',
      secondcode: '',
      thirdcode: '',
      isWin: false,
      isSubmit: false,
    };
    this.onSubmitChange = this.onSubmitChange.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  onSubmitChange() {
    const passcode = this.props.passcode;
    if (
      this.state.firstcode === passcode[0] &&
      this.state.secondcode === passcode[1] &&
      this.state.thirdcode === passcode[2]
    ) {
      this.setState({ isWin: true });
    }
    this.setState({ isSubmit: true });
  }

  renderResult() {
    const { history } = this.props;
    if (this.state.isWin) {
      return (
        <Message
          history={history}
          title="You Won!"
          message="You've escaped!"
          buttonText="Play again?"
          gameStatus="gameWon"
        />
      );
    } else {
      return (
        <Message
          history={history}
          title="Nope!"
          message="You entered the wrong password."
          buttonText="Try again?"
          gameStatus="wrongPassword"
        />
      );
    }
  }

  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  handleGoBack() {
    const { history, resumeGame } = this.props;
    resumeGame();
    history.goBack();
  }

  render() {
    return !this.state.isSubmit ? (
      <View style={styles.outer}>
        <View style={styles.inner}>
          <Text style={styles.title}>
            Ready to enter the complete password?
          </Text>

          <View style={styles.inputContainer}>
            <Input
              ref="1"
              containerStyle={styles.input}
              inputStyle={styles.inputstyle}
              defaultvalue={this.state.firstcode}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => {
                this.setState({ firstcode: text });
                this.refs['2'].focus();
              }}
              returnKeyType="next"
            />
            <Input
              ref="2"
              containerStyle={styles.input}
              inputStyle={styles.inputstyle}
              defaultvalue={this.state.secondcode}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => {
                this.setState({ secondcode: text });
                this.refs['3'].focus();
              }}
              returnKeyType="next"
            />
            <Input
              ref="3"
              containerStyle={styles.input}
              inputStyle={styles.inputstyle}
              defaultvalue={this.state.thirdcode}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => {
                this.setState({ thirdcode: text });
                Keyboard.dismiss();
              }}
            />
          </View>

          <TouchableHighlight
            style={styles.button}
            onPress={this.onSubmitChange}
            underlayColor="#68a0ff"
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    ) : (
      this.renderResult()
    );
  }
}

const mapState = state => {
  return {
    passcode: '937',
    // passcode: state.game.passcode
  };
};

const mapDispatch = dispatch => {
  return {
    resumeGame: () => dispatch(gameResumedThunk()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(PasswordScreen);

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontWeight: 'normal',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },

  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: '#6da3f2',
    height: '100%',
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: 36,
    marginTop: 150,
    marginBottom: 100,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#04152b',
    margin: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 50,
    alignSelf: 'center',
  },
  inputstyle: {
    color: 'white',
    fontSize: 45,
    borderBottomWidth: 2,
    borderColor: 'white',
  },
  button: {
    padding: 18,
    width: 150,
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  subtitle: {
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
});

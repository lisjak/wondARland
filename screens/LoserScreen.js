import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { gameResumedThunk } from '../store/gameReducer';
import { connect } from 'react-redux';

class Loser extends Component {
  constructor() {
    super();
    this.state = {
      headline: 'You Lose!',
      loseMessage: `You didn't escape in time.`,
      buttonLabel: 'Try again?',
      passwordWrong: false,
    };
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  componentDidMount() {
    const { headline, loseMessage, buttonLabel, passwordWrong } = this.props;
    if (this.props.headline) {
      this.setState({
        headline,
        loseMessage,
        buttonLabel,
        passwordWrong,
      });
    }
  }

  handleOnPress() {
    const { history, resumeGame } = this.props;
    if (this.state.passwordWrong) {
      resumeGame();
      history.goBack();
    } else history.push('/');
  }

  render() {
    const { history } = this.props;
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <Text style={styles.title}>{this.state.headline}</Text>
          <Text style={styles.subtitle}>{this.state.loseMessage}</Text>
        </View>

        <View style={styles.container}>
          <TouchableHighlight
            style={styles.buttons}
            onPress={this.handleOnPress}
            underlayColor="#68a0ff"
          >
            <Text style={styles.buttonText}>{this.state.buttonLabel}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    resumeGame: () => dispatch(gameResumedThunk()),
  };
};

export default connect(
  null,
  mapDispatch
)(Loser);

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#c4440d',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4440d',
    height: 600,
  },
  title: {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
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
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    height: 60,
    width: 160,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#ac3c0b',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

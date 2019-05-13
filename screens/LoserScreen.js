import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { gameResumedThunk } from '../store/gameReducer';
import { connect } from 'react-redux';
import styles from './styles';

class Loser extends Component {
  constructor() {
    super();
    this.state = {
      title: 'You Lose!',
      message: `You didn't escape in time.`,
      buttonText: 'Try again?',
      gameStatus: 'timerRanOut',
    };
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  componentDidMount() {
    const { title, message, buttonText, gameStatus } = this.props;
    if (this.props.title) {
      this.setState({
        title,
        message,
        buttonText,
        gameStatus,
      });
    }
  }

  handleOnPress() {
    const { history, resumeGame } = this.props;
    if (this.state.gameStatus === 'wrongPassword') {
      resumeGame();
      history.goBack();
    } else history.push('/');
  }

  render() {
    const { title, message, buttonText } = this.state;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: '#ac3c0b',
          height: 600,
        }}
      >
        <View style={styles.inner}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>

        <View style={styles.inner}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleOnPress}
            underlayColor="whitesmoke"
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
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

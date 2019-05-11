import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import { gameResumedThunk, gameEndedThunk } from '../store/gameReducer';
import styles from './styles';

class Message extends Component {
  constructor() {
    super();
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    const { gameStatus, resumeGame, endGame, history } = this.props;

    switch (gameStatus) {
      case 'gameWon':
        endGame();
        history.push('/');
        break;
      case 'gamePaused':
        resumeGame();
        history.goBack();
        break;
      case 'wrongPassword':
        resumeGame();
        history.goBack();
        break;
      case 'timerRanOut':
        endGame();
        history.push('/');
        break;
      default:
        history.goBack();
    }
  }

  render() {
    let { gameStatus, title, message, buttonText } = this.props;
    if (!gameStatus) gameStatus = 'default';
    const backgroundColor = {
      gameWon: '#498933',
      gamePaused: '#c4440d',
      wrongPassword: '#db5e00',
      timerRanOut: '#ec1c1a',
      default: '#000',
    };

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: backgroundColor[gameStatus],
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
            underlayColor="#404040"
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
    endGame: () => dispatch(gameEndedThunk()),
  };
};

export default connect(
  null,
  mapDispatch
)(Message);

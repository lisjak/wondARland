import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { gameStartedThunk } from '../store/gameReducer';
import styles from './styles';

let wondARland = require('../assets/images/screen.gif');

class ViroSample extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      user: firebase.auth().currentUser,
      error: '',
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleStart() {
    const { history, startGame } = this.props;
    startGame();
    history.push('/entryarscene');
  }

  handleSignOut() {
    const { user } = this.state;
    const { pointsFound, history } = this.props;
    try {
      this.setState({ loading: true });
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setState({
            loading: false,
            error: '',
            user: null,
          });
          history.push('/');
        });
    } catch (error) {
      this.setState({ error: 'Cannot log out!' });
    }
  }

  render() {
    const { user } = this.state;
    const { history } = this.props;
    return (
      <View style={styles.homeContainer}>
        <View style={styles.homeOuter}>
          <ImageBackground
            source={wondARland}
            style={{
              height: '94%',
              width: '100%',
              backgroundColor: '#04152b',
            }}
          />
        </View>

        {/* <View style={styles.homeButtonContainer}>
          <View style={styles.homeButtonRow}> */}
            {/* <View style={styles.homeInner}> */}
            <TouchableHighlight
              style={styles.button}
              onPress={() => history.push('/entryarscene')}
              underlayColor="#04152b"
            >
              <Text style={styles.buttonText}>Start Game</Text>
            </TouchableHighlight>



            <TouchableHighlight
              style={styles.button}
              onPress={() => history.push('/instructions')}
              underlayColor="#04152b"
            >
              <Text style={styles.buttonText}>Instructions</Text>
            </TouchableHighlight>
            {/* </View> */}
            {/* {user ? (
              <TouchableHighlight
                style={styles.button}
                onPress={this.handleSignOut}
                underlayColor="#04152b"
              >
                <Text style={styles.buttonText}>Sign Out</Text>
              </TouchableHighlight>
            ) : (
              <View>
                <TouchableHighlight
                  style={styles.button}
                  onPress={() => history.push('/signup')}
                  underlayColor="#04152b"
                >
                  <Text style={styles.buttonText}>Signup</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.button}
                  onPress={() => this.props.history.push('/login')}
                  underlayColor="#04152b"
                >
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableHighlight>
              </View>
            )} */}
          {/* </View> */}
        </View>

      // </View>
    );
  }
}

const mapStateToProps = state => ({
  pointsFound: state.game.pointsFound,
});
const mapDispatch = dispatch => {
  return {
    startGame: () => dispatch(gameStartedThunk()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(ViroSample);


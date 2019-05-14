import React, { Component } from 'react';
import { ViroARSceneNavigator } from 'react-viro';
import { connect } from 'react-redux';
import firebase from 'firebase';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
require('../secrets.js');
import ButtonBar from '../ARScenes/UIOverlay/ButtonBar';
import { gameStartedThunk } from '../store/gameReducer';

let sharedProps = {
  apiKey: process.env.APIKEY,
};

let InitialARScene = require('../ARScenes/FindingCards/FindingCards');
// let InitialARScene = require("../ARScenes/Portals/TestPortalSceneEmma");

class EntryARScene extends Component {
  constructor() {
    super();
    this.state = {
      sharedProps: sharedProps,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { history } = this.props;
    const user = firebase.auth().currentUser;
    return (
      <View style={styles.outer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={!this.props.gameInProgress}
        >
          <View style={styles.modalView}>
            <View style={styles.container}>
              <View>
                <ScrollView>
                  <Text style={styles.headerText}>♣♦ Helpful Hints ♠♥</Text>
                  <Text style={styles.text}>
                    {'\n'}♥ Look around! {'\n'}
                  </Text>
                  <Text style={styles.text}> ♠ Find a card! {'\n'}</Text>
                  <Text style={styles.text}>
                    {' '}
                    ♦ Point your camera to scan it! {'\n'}
                  </Text>
                  <Text style={styles.text}>
                    {' '}
                    ♣ Move your body through the portal to explore the
                    adventurescape! {'\n'}
                  </Text>
                  <Text style={styles.text}>
                    {' '}
                    ♥ Can't exit or enter the portal? Hit Stuck! on the button
                    bar. {'\n'}
                  </Text>
                  <Text style={styles.text}>
                    {' '}
                    ♠ Find all three digits for the passcode before time runs
                    out! {'\n'}
                  </Text>
                  <Text style={styles.text}>
                    {' '}
                    ♦ Don't get too lost down the rabbit hole!{' '}
                  </Text>
                </ScrollView>
              </View>
              <TouchableHighlight
                onPress={() => {
                  this.props.startGame();
                }}
                style={styles.buttons}
              >
                <Text style={styles.buttonText}>Got It</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        {this.props.gameInProgress && (
          <View style={styles.ARScene}>
            <ViroARSceneNavigator
              {...this.state.sharedProps}
              initialScene={{ scene: InitialARScene }}
            />
            <ButtonBar history={history} />
          </View>
        )}
      </View>
    );
  }
}

const mapState = state => {
  return {
    gameInProgress: state.game.gameInProgress,
  };
};

const mapDispatch = dispatch => {
  return {
    startGame: () => dispatch(gameStartedThunk()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(EntryARScene);

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  ARScene: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#1D1A05',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0,
    marginBottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#ac3c0b',
    borderRadius: 10,
    margin: 20,
    marginBottom: 120,
    padding: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'normal',
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  buttons: {
    padding: 18,
    marginTop: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    margin: 20,
  },
  buttonText: {
    color: '#ac3c0b',
    fontSize: 24,
    fontWeight: 'normal',
    alignSelf: 'center',
  },
});

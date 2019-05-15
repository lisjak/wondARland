import React, { Component } from 'react';
import { ViroARSceneNavigator } from 'react-viro';
import { connect } from 'react-redux';
// import firebase from 'firebase';
// import 'firebase/firestore';

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
import styles from '../screens/styles';

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
      // pointsFound: [],
      // user: firebase.auth().currentUser || null,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  // async componentDidMount() {
  //   const { user } = this.state;
  //   const firebaseDB = await firebase.firestore();
  //   let info = null;

  //   if (user) {
  //     let data = await firebaseDB
  //       .collection('users')
  //       .doc(user.email)
  //       .get();
  //     let pointsFound = data._document.proto.fields.pointsFound.integerValue;

  //     this.setState({ pointsFound: pointsFound });
  //   }
  // }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { history } = this.props;
    // const { user } = this.state;
    return (
      <View style={styles.outer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={!this.props.gameInProgress}
        >
          <View style={styles.modalView}>
            <View style={styles.entrySceneContainer}>
              <View>
                <ScrollView style={{ marginTop: 40 }}>
                  <Text style={styles.instructionsTitle}>How to Play</Text>
                  {/* {user ? (
                    <Text style={styles.headerText}>
                      Welcome {user.email}! You have {this.state.pointsFound}{" "}
                      hearts!
                    </Text>
                  ) : null} */}

                  <Text style={styles.bodyText}>♥ Look around!</Text>
                  <Text style={styles.bodyText}> ♠ Find a card! </Text>
                  <Text style={styles.bodyText}>
                    ♦ Point your camera to scan it!
                  </Text>
                  <Text style={styles.bodyText}>
                    ♣ Move your body through the portal to explore the
                    adventurescape!
                  </Text>
                  <Text style={styles.bodyText}>
                    ♥ Can't exit or enter the portal? Hit Stuck! on the button
                    bar.
                  </Text>
                  <Text style={styles.bodyText}>
                    ♠ Find all three digits for the passcode before time runs
                    out!
                  </Text>
                  <Text style={styles.bodyText}>
                    ♦ Don't get too lost down the rabbit hole!
                  </Text>
                </ScrollView>
              </View>
            </View>
            <TouchableHighlight
              style={styles.button}
              underlayColor="whitesmoke"
              onPress={() => {
                this.props.startGame();
              }}
            >
              <Text style={styles.buttonText}>Play!</Text>
            </TouchableHighlight>
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
    pointsFound: state.game.pointsFound,
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

import React, { Component } from "react";
import { ViroARSceneNavigator } from "react-viro";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  TouchableHighlight
} from "react-native";
require("../secrets.js");
import ButtonBar from "../ARScenes/UIOverlay/ButtonBar";

let sharedProps = {
  apiKey: process.env.APIKEY
};

let InitialARScene = require("../ARScenes/FindingCards/FindingCards");
// let InitialARScene = require("../ARScenes/Portals/TestPortalSceneEmma");

export default class EntryARScene extends Component {
  constructor() {
    super();
    this.state = {
      sharedProps: sharedProps,
      modalVisible: true,
      stateGame: false
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { history } = this.props;
    return (
      <View style={styles.outer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalView}>
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Find the Cards</Text>
                <Text style={styles.text}>Hold Camera Straight and Scan</Text>
                <Text style={styles.text}>Please wait for the magic!</Text>
              </View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.setState({ stateGame: true });
                }}
                style={styles.buttons}
              >
                <Text style={styles.buttonText}>Got It</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        {this.state.stateGame && (
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

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: "transparent"
  },
  ARScene: {
    flex: 1,
    backgroundColor: "transparent"
  },
  modalView: {
    flex: 1,
    backgroundColor: "#1D1A05",
    // backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#ac3c0b",
    borderRadius: 10,
    margin: 20,
    marginBottom: 200
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "normal"
  },
  buttons: {
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    margin: 20
  },
  buttonText: {
    color: "#ac3c0b",
    fontSize: 24,
    fontWeight: "normal",
    alignSelf: "center"
  }
});

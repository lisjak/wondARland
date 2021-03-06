import React, { Component } from "react";
import { StyleSheet, Vibration } from "react-native";

import {
  ViroNode,
  ViroText,
  ViroPortal,
  ViroPortalScene,
  ViroVideo,
  Viro360Video,
  Viro3DObject,
  ViroSound,
  ViroMaterials
} from "react-viro";
import { connect } from "react-redux";
import HeartObject from "./HeartObject";
const cheshireCat = require("../../assets/portal_assets/chesh.mp4");

export class QueenPortal2 extends Component {
  constructor() {
    super();
    this.state = {
      showPasscode: false,
      visible: false,
      playPortalSound: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.cheshClick = this.cheshClick.bind(this);
    this.handleEnterPortal = this.handleEnterPortal.bind(this);
    this.handleExitPortal = this.handleExitPortal.bind(this);
  }

  handleClick() {
    this.setState({
      showPasscode: true
    });
  }

  cheshClick() {
    this.setState({
      visible: true
    });
    Vibration.vibrate([0, 250, 500, 750], false);
  }

  handleEnterPortal() {
    this.setState({ playPortalSound: false });
  }
  handleExitPortal() {
    this.setState({ playPortalSound: true });
  }

  render() {
    const passcode = this.props.passcode;
    return (
      <ViroPortalScene passable={true}>
        <ViroPortal
          position={[0, 0, -1.3]}
          scale={[0.15, 0.15, 0.15]}
          onPortalEnter={this.handleEnterPortal}
          onPortalExit={this.handleExitPortal}
        >
          <Viro3DObject
            source={require("../../assets/portal_assets/portal_res/portal_ship/portal_ship.vrx")}
            resources={[
              require("../../assets/portal_assets/portal_res/portal_ship/portal_ship_diffuse.png"),
              require("../../assets/portal_assets/portal_res/portal_ship/portal_ship_normal.png"),
              require("../../assets/portal_assets/portal_res/portal_ship/portal_ship_specular.png")
            ]}
            type="VRX"
          />
        </ViroPortal>

        <ViroVideo
          source={cheshireCat}
          height={4}
          width={4}
          loop={true}
          position={[0, 0, -5]}
          rotation={[0, 0, 0]}
          onClick={this.cheshClick}
        />

        <ViroText
          text={`Curious and curiouser... keep looking...`}
          width={2}
          height={2}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0.8, -2]}
          outerStroke={{ type: "Outline", width: 2, color: "#0080FF" }}
          visible={this.state.visible}
        />

        <HeartObject position={[-0.5, 1, -3]} />
        <HeartObject position={[0, 1, -4]} />
        <HeartObject position={[-2, -1, -1.5]} />
        <HeartObject position={[2, -2, -3]} />
        <HeartObject position={[-2, -1, -3]} />

        <ViroNode position={[4, 1, -4]}>
          <ViroText
            style={styles.boldFont}
            position={[0, 0.1, -0.1]}
            height={3}
            extrusionDepth={3}
            materials={["frontMaterial", "backMaterial", "sideMaterial"]}
            text={`The first number of the passcode: ${passcode[0]}`}
            visible={this.state.showPasscode}
          />

          <Viro3DObject
            source={require("../../assets/emoji_heart/emoji_heart.vrx")}
            resources={[
              require("../../assets/emoji_heart/emoji_heart_specular.png"),
              require("../../assets/emoji_heart/emoji_heart.png")
            ]}
            position={[0, 0, -0.2]}
            scale={[0.3, 0.3, 0.3]}
            onClick={this.handleClick}
            type="VRX"
          />
        </ViroNode>

        <ViroSound
          paused={this.state.playPortalSound}
          muted={false}
          source={require("../../assets/music/spooky.m4a")}
          loop={true}
          volume={1.0}
        />
      </ViroPortalScene>
    );
  }
}

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: "#FFFFFF"
  },
  backMaterial: {
    diffuseColor: "#001D4A"
  },
  sideMaterial: {
    diffuseColor: "#7EA8BE"
  }
});

const styles = StyleSheet.create({
  boldFont: {
    color: "#FFFFFF",
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24
  },
  portalTextStyles: {
    fontFamily: "Arial",
    fontSize: 28,
    color: "#C8243B",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

const mapState = state => {
  return {
    passcode: state.game.passcode
  };
};

export default connect(
  mapState,
  null
)(QueenPortal2);
// module.exports = QueenPortal2;

import React, { Component } from "../../node_modules/react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroText,
  ViroNode
} from "../../node_modules/react-viro";

import HeartObject from "./HeartObject";
// import RoseObject from "./RoseObject";
import RosePortal from "./RosesPortal";
import QueenPortal from "./QueenPortal2";
import PortPortal from "./PortScene";
import SpadePortal from "./SpadePortal";

const shipPortal =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship.vrx";

const portalShipDiffuse =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship_diffuse.png";

const portalShipNormal =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship_normal.png";

const portalShipSpecular =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship_specular.png";

class TestPortalScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portalText: "Hello There!",
      showPasscode: false
    };
    this._onEnterPortal = this._onEnterPortal.bind(this);
    // this._jumpNextScene = this._jumpNextScene.bind(this);
    // this._handleClick = this._handleClick.bind(this);
    // this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  _onEnterPortal() {
    this.setState({
      portalText: "Find the key!"
    });
  }

  // handleHover(isHovering) {
  //   if (isHovering) {
  //     this.setState({ showPasscode: true });
  //   } else {
  //     this.setState({ showPasscode: false });
  //   }
  // }

  handleClick(stateValue) {
    this.setState({
      showPasscode: true
    });
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" intensity={200} />

        {/* <ViroPortalScene
          passable={true}
          onPortalEnter={() => {
            this._onEnterPortal();
          }}
        >
          <ViroPortal position={[0, 0, -2]} scale={[0.3, 0.3, 0.3]}>
            <Viro3DObject
              source={require(shipPortal)}
              resources={[
                require(portalShipDiffuse),
                require(portalShipNormal),
                require(portalShipSpecular)
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image
            source={require("../../assets/res/guadalupe_360.jpg")}
          />

          <ViroText
            text={this.state.portalText}
            width={2}
            height={2}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0.4, -3]}
            style={styles.portalTextStyles}
          />

          <HeartObject position={[1, 1, -1]} />
          <HeartObject position={[1, 1.5, -2]} />
          <HeartObject position={[-1, 1, -1]} />
          <RoseObject position={[2, 1, -5]} scale={[0.05, 0.05, 0.05]} />

          <ViroNode position={[1, 1, -1]}>
            <ViroText
              text="Your First Passcode is 1001"
              width={2}
              height={2}
              scale={[0.5, 0.5, 0.5]}
              position={[0, 1, -2]}
              style={styles.portalTextStyles}
              visible={this.state.showPasscode}
            />

            <Viro3DObject
              source={require("../../assets/emoji_heart/emoji_heart.vrx")}
              resources={[
                require("../../assets/emoji_heart/emoji_heart_specular.png"),
                require("../../assets/emoji_heart/emoji_heart.png")
              ]}
              position={[0, 0, -1]}
              scale={[0.3, 0.3, 0.3]}
              onClick={this.handleClick}
              type="VRX"
            />
          </ViroNode>
        </ViroPortalScene> */}
        {/* <RosePortal /> */}
        {/* <QueenPortal /> */}
        {/* <PortPortal /> */}
        <SpadePortal />
      </ViroARScene>
    );
  }
}

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "#C8243B",
    textAlignVertical: "center",
    textAlign: "center"
  },
  portalTextStyles: {
    fontFamily: "Arial",
    fontSize: 28,
    color: "#C8243B",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = TestPortalScene;

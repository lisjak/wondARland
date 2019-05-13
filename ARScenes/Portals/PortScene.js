"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  Viro360Video,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroText,
  ViroNode,
  ViroMaterials
} from "react-viro";

import { PortalScene2 } from "./AcePortalScene2";

import HeartObject from "./HeartObject";

let count = 0;
const shipPortal =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship.vrx";

const portalShipDiffuse =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship_diffuse.png";

const portalShipNormal =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship_normal.png";

const portalShipSpecular =
  "../../assets/portal_assets/portal_res/portal_ship/portal_ship_specular.png";

class PortScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portalText: "Down the rabbit hole...",
      showPasscode: false
    };
    this._onEnterPortal = this._onEnterPortal.bind(this);
    // this._jumpNextScene = this._jumpNextScene.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  _onEnterPortal() {
    this.setState({
      portalText: "Down the rabbit hole..."
    });
  }
  handleClick() {
    this.setState({ showPasscode: true });
  }

  //jump to second scene
  // _jumpNextScene() {
  //   this.props.arSceneNavigator.jump('scene2', { scene: PortalScene2 });
  // }

  render() {
    return (
      <ViroPortalScene
        position={[0, 0.5, -2]}
        passable={true}
        onPortalEnter={() => {
          this._onEnterPortal();
        }}
      >
        <ViroPortal position={[0, 0, -1]} scale={[0.3, 0.3, 0.3]}>
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
        <Viro360Video
          source={require("../../assets/portal_assets/2ndtrip.mp4")}
          loop={true}
          paused={false}
          volume={1.0}
        />

        <ViroPortalScene
          passable={true}
          onPortalEnter={() => {
            this._onEnterPortal();
          }}
        >
          <ViroPortal position={[-2, 0, -3]} scale={[0.3, 0.3, 0.3]}>
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
            source={require("../../assets/portal_assets/360_space.jpg")}
          />
        </ViroPortalScene>
        <ViroPortalScene
          passable={true}
          // dragType="FixedDistance"
          // onDrag={() => {}}
          onPortalEnter={() => {
            this._onEnterPortal();
          }}
        >
          <ViroPortal position={[2, 0, -3]} scale={[0.3, 0.3, 0.3]}>
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
            source={require("../../assets/portal_assets/360_tiles.jpg")}
          />
          <ViroNode position={[2, 0, -3]}>
            {/* <ViroText
              text="Your Third Passcode is 0111"
              width={2}
              height={2}
              scale={[0.5, 0.5, 0.5]}
              position={[0, 1, -2]}
              style={styles.portalTextStyles}
              visible={this.state.showPasscode}
            /> */}
            {/* 3D Text vertion for passcode */}
            <ViroText
              style={styles.boldFont}
              position={[1, 0.4, -0.1]}
              height={3}
              extrusionDepth={3}
              materials={["frontMaterial", "backMaterial", "sideMaterial"]}
              text="Third Number of password is 7"
              visible={this.state.showPasscode}
            />

            <Viro3DObject
              source={require("../../assets/emoji_heart/emoji_heart.vrx")}
              resources={[
                require("../../assets/emoji_heart/emoji_heart_specular.png"),
                require("../../assets/emoji_heart/emoji_heart.png")
              ]}
              position={[1, 0.5, -0.2]}
              scale={[0.3, 0.3, 0.3]}
              onClick={this.handleClick}
              type="VRX"
            />
          </ViroNode>
        </ViroPortalScene>

        {/* <ViroImage
          source={require('../../assets/res/Clickme.jpg')}
          position={[2, 2, -4]}
          scale={[0.3, 0.3, 0.3]}
          onClick={this._jumpNextScene}
        /> */}

        <ViroText
          text={this.state.portalText}
          width={2}
          height={2}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0.4, -3]}
          style={styles.portalTextStyles}
        />
        {/* <ViroImage
          source={require('../../assets/res/signExit.png')}
          position={[1, 1, -3]}
          scale={[0.1, 0.1, 0.1]}
          onClick={this._handleClick}
        /> */}

        <ViroText
          text={this.state.portalText}
          width={2}
          height={2}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0.4, -3]}
          outerStroke={{ type: "Outline", width: 2, color: "#000000" }}
          style={styles.portalTextStyles}
        />

        <HeartObject position={[2, 2, -3]} />
        <HeartObject position={[1, 1.5, -5]} />
        <HeartObject position={[-1, 1, -4]} />
      </ViroPortalScene>
    );
  }
}

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  },
  portalTextStyles: {
    fontFamily: "Arial",
    fontSize: 28,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  },
  boldFont: {
    color: "#6E7E85",
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24
  }
});

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: "#6E7E85"
  },
  backMaterial: {
    diffuseColor: "#B7B7B7"
  },
  sideMaterial: {
    diffuseColor: "#FEFFFE"
  }
});

module.exports = PortScene;

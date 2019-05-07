'use strict';

import React, { Component } from '../../node_modules/react';

import { StyleSheet } from 'react-native';

import {
    ViroSceneNavigator,
    ViroScene,
    ViroARScene,
    ViroAmbientLight,
    ViroSpinner,
    Viro360Video,
    Viro360Image,
    ViroUtils,
    ViroPortal,
    ViroPortalScene,
    Viro3DObject,
    ViroText,
    ViroImage
} from '../../node_modules/react-viro';

import { PortalScene2 } from './AcePortalScene2'
// import PasswordScreen from '../PasswordScreen'


class PortScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portalText: 'Hello There!',
        };
        this._onEnterPortal = this._onEnterPortal.bind(this);
        this._jumpNextScene = this._jumpNextScene.bind(this);
        this._handleClick = this._handleClick.bind(this)
    }

    _onEnterPortal() {
        this.setState({
            portalText: 'Find the key!',
        });
    }

    //jump to second scene
    _jumpNextScene() {

        this.props.arSceneNavigator.jump('scene2', { scene: PortalScene2 })
    }

    //Exit to the PasswordScreen
    _handleClick() {
        // this.setState({ isExit: true })
    }

    // render: function() {
    render() {
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized}>
                <ViroAmbientLight color="#ffffff" intensity={200} />

                {/* Loading Spinner for Portal */}


                <ViroPortalScene
                    passable={true}
                    // dragType="FixedDistance"
                    // onDrag={() => {}}
                    onPortalEnter={() => {
                        this._onEnterPortal();
                    }}
                >

                    <ViroPortal position={[0, 0, -2]} scale={[0.3, 0.3, 0.3]}>
                        <Viro3DObject
                            source={require('./portal_res/portal_ship/portal_ship.vrx')}
                            resources={[
                                require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                                require('./portal_res/portal_ship/portal_ship_normal.png'),
                                require('./portal_res/portal_ship/portal_ship_specular.png'),
                            ]}
                            type="VRX"
                        />
                    </ViroPortal>
                    <Viro360Image source={require('./portal_res/360_island.jpg')} />

                    <ViroPortalScene
                        passable={true}
                        // dragType="FixedDistance"
                        // onDrag={() => {}}
                        onPortalEnter={() => {
                            this._onEnterPortal();
                        }}
                    >
                        <ViroPortal position={[-2, 0, -5]} scale={[0.3, 0.3, 0.3]}>
                            <Viro3DObject
                                source={require('./portal_res/portal_ship/portal_ship.vrx')}
                                resources={[
                                    require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                                    require('./portal_res/portal_ship/portal_ship_normal.png'),
                                    require('./portal_res/portal_ship/portal_ship_specular.png'),
                                ]}
                                type="VRX"
                            />
                        </ViroPortal>
                        <Viro360Image source={require('../res/360_space.jpg')} />
                    </ViroPortalScene>

                    <ViroPortalScene
                        passable={true}
                        // dragType="FixedDistance"
                        // onDrag={() => {}}
                        onPortalEnter={() => {
                            this._onEnterPortal();
                        }}
                    >
                        <ViroPortal position={[2, 0, -5]} scale={[0.3, 0.3, 0.3]}>
                            <Viro3DObject
                                source={require('./portal_res/portal_ship/portal_ship.vrx')}
                                resources={[
                                    require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                                    require('./portal_res/portal_ship/portal_ship_normal.png'),
                                    require('./portal_res/portal_ship/portal_ship_specular.png'),
                                ]}
                                type="VRX"
                            />
                        </ViroPortal>
                        <Viro360Image source={require('../res/360tile.jpg')} />
                    </ViroPortalScene>

                    <ViroImage
                        source={require('../res/Clickme.jpg')}
                        position={[2, 2, -4]} scale={[0.3, 0.3, 0.3]}
                        onClick={this._jumpNextScene} />
                    <ViroText
                        text={this.state.portalText}
                        width={2}
                        height={2}
                        scale={[0.5, 0.5, 0.5]}
                        position={[0, 0.4, -3]}
                        style={styles.portalTextStyles}
                    />
                    <ViroImage
                        source={require('../res/signExit.png')}
                        position={[1, 1, -3]} scale={[0.1, 0.1, 0.1]}
                        onClick={this._handleClick} />
                </ViroPortalScene>
            </ViroARScene>)
    }
}

const styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'IM Fell English',
        fontSize: 20,
        color: '#C8243B',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    portalTextStyles: {
        fontFamily: 'IM Fell English',
        fontSize: 28,
        color: '#C8243B',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});


    module.exports = PortScene;

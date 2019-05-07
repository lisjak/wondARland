/* eslint-disable react/prefer-es6-class */
/**
 * Copyright (c) 2017-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React, {Component} from '../../node_modules/react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';


import { PortalScene2 } from '../Portals/AcePortalScene2'
import PasswordScreen from '../../screens/PasswordScreen'


import QueenPortal from '../Portals/QueenPortal'

import {
    ViroARScene,
    ViroSpinner,
    ViroText,
    ViroImage,
    ViroARImageMarker,
    Viro3DObject,
    ViroAmbientLight,
    Viro360Video,
    ViroBox,
    ViroNode,
    Viro360Image,
    ViroPortal,
    ViroPortalScene,
    ViroARTrackingTargets,
} from '../../node_modules/react-viro';


// let createReactClass = require('create-react-class');


class FindingCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Initializing AR...',
            isLoading: true,
            // isPortalRendered: false
        }
        this._onInitialized = this._onInitialized.bind(this);
        this._isPortalLoading = this._isPortalLoading.bind(this);

        }

    // Text update when AR initialized
    _onInitialized() {
        this.setState({
            text: `Portal incoming...`,
        });
    }

        _isPortalLoading() {
            this.setState({
                isLoading: false
            });
        }


    render() {
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized}>

            <ViroAmbientLight color="#ffffff" intensity={200} />


                <ViroARImageMarker target="queen" >


                    <ViroSpinner
                        type="Light"
                        position={[0, 0, -2]}
                        visible={this.state.isLoading}
                    />
                    {/* Initializing Text Component */}
                    <ViroText
                        text={this.state.text}
                        width={2}
                        height={2}
                        scale={[0.5, 0.5, 0.5]}
                        position={[0, 0.5, -2]}
                        style={styles.helloWorldTextStyle}
                    />


                    <QueenPortal />


                </ViroARImageMarker>


            </ViroARScene>
        );
    }
}

const styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'IM Fell English',
        fontSize: 20,
        color: '#ffffff',
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


ViroARTrackingTargets.createTargets({
    queen: {
        source: require('../../assets/target_markers_assets/queen.jpg'),
        orientation: 'Up',
        physicalWidth: 0.08, // real world width in meters
    },
});


module.exports = FindingCards;

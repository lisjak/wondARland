import React from '../../node_modules/react'
import { ViroARScene, ViroAmbientLight, ViroPortalScene, ViroPortal, Viro3DObject, ViroText, Viro360Image, ViroSpinner } from '../../node_modules/react-viro'
import {StyleSheet} from 'react-native'

export class PortalScene2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      portalText: 'Hello From Second Scene!',
      text: 'Initializing AR...',
      isLoading: true,
      isPortalRendered: false,     //where do we use this state???
    };
    this._onInitialized = this._onInitialized.bind(this);
    this._onEnterPortal = this._onEnterPortal.bind(this);
  }


  // Text update when AR initialized
  _onInitialized() {
    this.setState({
      text: `Are you ready? Don't get too lost... `,
    });
  }

  _onEnterPortal() {
    this.setState({
      portalText: 'Find the key!',
      isLoading: false,
      text: ''
    });
  }


  render() {
    return (
    <ViroARScene>
       <ViroAmbientLight color="#ffffff" intensity={200} />

          {/* Loading Spinner for Portal */}
       <ViroSpinner
          type="Light"
          position={[0, 0, -2]}
          visible={this.state.isLoading}
        />

        <ViroPortalScene
          passable={true}
          // dragType="FixedDistance"
          // onDrag={() => {}}
          onPortalEnter={() => {
            this._onEnterPortal();
          }}
        >
          <ViroPortal position={[0, 0, -2]} scale={[0.2, 0.2, 0.2]}>
            <Viro3DObject
              source={require('../../assets/portal_assets/portal_res/portal_ship/portal_ship.vrx')}
              resources={[
                require('../../assets/portal_assets/portal_res/portal_ship/portal_ship_diffuse.png'),
                require('../../assets/portal_assets/portal_res/portal_ship/portal_ship_normal.png'),
                require('../../assets/portal_assets/portal_res/portal_ship/portal_ship_specular.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image source={require('../../assets/portal_assets/360_space.jpg')} />
          <ViroText
            text={this.state.portalText}
            width={2}
            height={2}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0.4, -3]}
            style={styles.portalTextStyles}
          />

        </ViroPortalScene>

    </ViroARScene>
    )
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

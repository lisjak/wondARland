import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from './Timer';
import PasswordButton from './Button';
import { Subheader, Button } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    alignItems: 'center',
    // backgroundColor: 'rgba(52, 52, 52, 0.7)',
    backgroundColor: 'transparent',
  },
  rowContainer: {
    flex: 0.15,
    // alignItems: 'center',
    // margin: -0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
  button: {
    // marginHorizontal: 0.4,
    backgroundColor: 'transparent',
  },
});

class ButtonPage extends Component {
  render() {
    const { history } = this.props;
    return (
      <View style={styles.rowContainer}>
        {/* <View style={styles.rowContainer}> */}
        <Timer history={this.props.history} />
        {/* <View style={styles.rowContainer}> */}
        <Button
          accent
          text="enter password"
          onPress={() => history.push('/password')}
        />
      </View>
      // </View>
      // </View>
    );
  }
}

export default ButtonPage;

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Timer from './Timer';
// import PasswordButton from './Button';
// import { BottomNavigation } from 'react-native-material-ui'

// export default class Login extends React.Component {
//   render() {
//     const { history } = this.props;
//     return (
//       <View style={styles.container}>
//         <Timer style={styles.items} history={history} />
//         <PasswordButton style={styles.items} history={history} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.12,
//     flexDirection: 'column',
//     backgroundColor: 'transparent',
//   },
//   items: {
//     // justifyContent: 'space-between',
//   },
// });

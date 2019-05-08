import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';

class Instructions extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <View>
        <View>
          <Text>Instructions</Text>
        </View>
        <View>
          <Text>Welcome to WondARLand!</Text>
          <Text>
            Go find the keys in real life and race against the timer to find a 3
            digit password.
          </Text>
          <Text>Can you find the clues and escape in time?</Text>
        </View>
        <View>
          <Button primary text="go back" onPress={() => history.push('/')} />
        </View>
      </View>
    );
  }
}

export default Instructions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
  },
  // title: {
  //   // flex: 3,
  //   // marginTop: 40,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   fontWeight: 'bold',
  //   fontSize: 50,
  //   color: 'white',
  //   // justifyContent: 'space-between',
  // },
  // subtitle: {
  //   marginTop: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   fontWeight: 'bold',
  //   fontSize: 30,
  //   color: 'white',
  // },
});

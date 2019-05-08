import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Home from './screens/Home';
import Login from './screens/LogIn';
import Instructions from './screens/Instructions';
import Loser from './screens/LoserScreen';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.outer}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/instructions" component={Instructions} />
            <Route exact path="/loser" component={Loser} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

var styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

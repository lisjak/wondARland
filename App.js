
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Home from './screens/Home'
import Login from './screens/LogIn'
import Instructions from './screens/Instructions'

export default class App extends Component {
  render (){
    return (
    <NativeRouter>
      <View style={styles.outer}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/instructions' component={Instructions} />
        </Switch>
      </View>
    </NativeRouter>
  ) }
}

var styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
  }
})

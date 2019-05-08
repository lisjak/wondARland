import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import Home from './screens/Home';
import Login from './screens/LogIn';
import Instructions from './screens/Instructions';
import Loser from './screens/LoserScreen';
import PasswordScreen from './screens/PasswordScreen';

const uiTheme = {
  palette: {
    primaryColor: COLOR.teal700,
    accentColor: COLOR.deepOrange700,
    backgroundColor: COLOR.teal300,
    color: COLOR.deepOrange900,
  },
  toolbar: {
    container: {
      height: 10,
    },
  },
};

export default class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <NativeRouter>
          <View style={styles.outer}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/instructions" component={Instructions} />
              <Route exact path="/loser" component={Loser} />
              <Route exact path="/password" component={PasswordScreen} />
            </Switch>
          </View>
        </NativeRouter>
      </ThemeContext.Provider>
    );
  }
}

let styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

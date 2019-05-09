import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Provider } from 'react-redux';
import { COLOR } from 'react-native-material-ui';
import store from './store';
import Home from './screens/Home';
import Login from './screens/LogIn';
import Instructions from './screens/Instructions';
import Loser from './screens/LoserScreen';
import PasswordScreen from './screens/PasswordScreen';
import Winner from './screens/WinnerScreen';
import Pause from './screens/PauseScreen';
import EntryARScene from './ARScenes/EntryScene';

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
    const { history } = this.props;
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.outer}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/instructions" component={Instructions} />
              <Route exact path="/entryarscene" component={EntryARScene} />
              <Route exact path="/loser" component={Loser} />
              <Route exact path="/password" component={PasswordScreen} />
              <Route exact path="/winner" component={Winner} />
              <Route exact Path="/pause" component={Pause} />
            </Switch>
          </View>
        </NativeRouter>
      </Provider>
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

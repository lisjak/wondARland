import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Keyboard
} from "react-native";
import { Input, Button } from "react-native-elements";
import { gameResumedThunk } from "../store/gameReducer";
import Winner from "./WinnerScreen";
import Loser from "./LoserScreen";

const passcode = "937";

class PasswordScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstcode: "",
      secondcode: "",
      thirdcode: "",
      // code: "",
      isWin: false,
      isSubmit: false
    };
    this.onSubmitChange = this.onSubmitChange.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  onSubmitChange() {
    if (
      this.state.firstcode === passcode[0] &&
      this.state.secondcode === passcode[1] &&
      this.state.thirdcode === passcode[2]
      // this.state.code === passcode
    ) {
      this.setState({ isWin: true });
    }
    this.setState({ isSubmit: true });
  }

  renderResult() {
    const { history } = this.props;
    if (this.state.isWin) {
      return <Winner history={history} />;
    } else {
      return (
        <Loser
          history={history}
          headline="Nope!"
          loseMessage="You entered the wrong password."
          buttonLabel="Try again?"
          passwordWrong={true}
        />
      );
    }
  }

  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  handleGoBack() {
    const { history, resumeGame } = this.props;
    resumeGame();
    history.goBack();
  }

  render() {
    const { history } = this.props;
    return !this.state.isSubmit ? (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>
            Ready to enter your three passcode?
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            ref="1"
            containerStyle={styles.input}
            inputStyle={styles.inputstyle}
            defaultvalue={this.state.firstcode}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => {
              this.setState({ firstcode: text });
              this.refs["2"].focus();
            }}
            returnKeyType="next"
            // onSubmitEditing={() => this.focusNextField("2")}
          />
          <Input
            ref="2"
            containerStyle={styles.input}
            inputStyle={styles.inputstyle}
            defaultvalue={this.state.secondcode}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => {
              this.setState({ secondcode: text });
              this.refs["3"].focus();
            }}
            returnKeyType="next"
            // onSubmitEditing={() => this.focusNextField("3")}
          />
          <Input
            ref="3"
            containerStyle={styles.input}
            inputStyle={styles.inputstyle}
            defaultvalue={this.state.thirdcode}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => {
              this.setState({ thirdcode: text });
              Keyboard.dismiss();
            }}
          />
          {/* <Input
            containerStyle={styles.input}
            inputStyle={styles.inputstyle}
            defaultvalue={this.state.code}
            keyboardType="numbers-and-punctuation"
            maxLength={3}
            placeholder="000"
            placeholderTextColor="white"
            onChangeText={text => {
              this.setState({ code: text });
            }}
          /> */}
        </View>

        <Text style={styles.text}>
          (Be careful! If you're wrong, you'll have to replay all the portals in
          the time you have left.)
        </Text>
        {/* <Button
          containerStyle={styles.button}
          buttonStyle={styles.buttonstyle1}
          title="submit"
          type="solid"
          onPress={() => this.onSubmitChange()}
        /> */}

        <TouchableHighlight
          style={styles.button}
          onPress={this.onSubmitChange}
          underlayColor="#68a0ff"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>

        {/* <Button
          containerStyle={styles.link}
          buttonStyle={styles.buttonstyle2}
          title="<-Go Back"
          type="solid"
          onPress={this.handleGoBack}
        /> */}
      </View>
    ) : (
      this.renderResult()
    );
  }
}

const mapDispatch = dispatch => {
  return {
    resumeGame: () => dispatch(gameResumedThunk())
  };
};

export default connect(
  null,
  mapDispatch
)(PasswordScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    margin: 10
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  input: {
    width: 50,
    alignSelf: "center"
  },
  inputstyle: {
    color: "white",
    fontSize: 45,
    borderBottomWidth: 2,
    borderColor: "white"
  },
  button: {
    // flex: 1,
    alignSelf: "center",
    margin: 10,
    marginBottom: 50,
    height: 60,
    width: 160,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#ac3c0b",
    borderRadius: 10
  },
  buttonstyle1: {
    backgroundColor: "black",
    height: 50,
    width: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  link: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonstyle2: {
    backgroundColor: "black",
    height: 50,
    width: 100
  },

  title: {
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "white"
  },
  subtitle: {
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "white"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttons: {
    height: 60,
    width: 160,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#ac3c0b",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3
  }
});

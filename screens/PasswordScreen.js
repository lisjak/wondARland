import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements'
import Winner from './WinnerScreen'
import Loser from './LoserScreen'

const passcode = ['9','3','7'];

export default class PasswordScreen extends Component{
  constructor(){
    super();
    this.state = {
      firstcode: '',
      secondcode: '',
      thirdcode: '',
      isWin: false,
      isSubmit: false,
    }
    this.onSubmitChange = this.onSubmitChange.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
  }

  componentDidMount(){

  }

  onSubmitChange(){
    if (this.state.firstcode === passcode[0] && this.state.secondcode === passcode[1] && this.state.thirdcode === passcode[2]){
      this.setState({isWin: true})
    }
    this.setState({isSubmit: true})
  }

  renderResult(){
    if(this.state.isWin){
      return <Winner />
    } else{
      return <Loser />
    }
  }


  focusNextField(nextField){
    this.refs[nextField].focus()
  }

  render() {
    return !this.state.isSubmit ? (
      <View style={styles.container}>
        <View style={styles.textContainer}>
           <Text style={styles.text}>Ready to enter your passcode?</Text>
        </View>
        <View style={styles.inputContainer}>
           <Input ref='1' containerStyle={styles.input} inputStyle={styles.inputstyle} defaultvalue={this.state.firstcode} onChangeText={(text) => this.setState( {firstcode:text} ) }
           returnKeyType='next' onSubmitEditing={()=>this.focusNextField('2')} />
           <Input ref='2' containerStyle={styles.input} inputStyle={styles.inputstyle}
           defaultvalue={this.state.secondcode} onChangeText={(text) => this.setState({secondcode:text})}
           returnKeyType='next' onSubmitEditing={()=>this.focusNextField('3')}  />
           <Input ref='3' containerStyle={styles.input} inputStyle={styles.inputstyle}
           defaultvalue={this.state.secondcode} onChangeText={(text) => this.setState({thirdcode:text})}/>
        </View>

       <Button containerStyle={styles.button} buttonStyle={styles.buttonstyle1 }title='submit' type='solid' onPress={() => this.onSubmitChange()} />

       <Button containerStyle={styles.link}
       buttonStyle={styles.buttonstyle2 }
       title='<-Go Back' type='solid' onPress={()=>{}} />
      </View>
    ) : this.renderResult()
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 60,
    alignSelf: 'center',

  },
  inputstyle: {
    color: 'white',
    fontSize: 45,
    borderBottomWidth: 2,
    borderColor: 'white',
  },
  button: {
    flex: 1,
    alignSelf: 'center',
  },
  buttonstyle1: {
    backgroundColor: 'purple',
    height: 50,
    width: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  link: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonstyle2: {
    backgroundColor: 'purple',
    height: 50,
    width: 100,
  }
})


import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements'

export default class PasswordScreen extends Component{
  constructor(){
    super();
    this.state = {
      value: ''
    }
  }

  componentDidMount(){

  }

  onChange(value){
    this.setState(value)
  }

  onSubmitChange(){

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
           <Text style={styles.text}>Ready to enter your passcode?</Text>
        </View>
        <View style={styles.inputContainer}>
           <Input containerStyle={styles.input} inputStyle={styles.inputstyle} />
           <Input containerStyle={styles.input} inputStyle={styles.inputstyle} />
           <Input containerStyle={styles.input} inputStyle={styles.inputstyle} />
        </View>

       <Button containerStyle={styles.button} buttonStyle={styles.buttonstyle1 }title='submit' type='solid' onPress={() => this.onSubmitChange()} />

       <Button containerStyle={styles.link}
       buttonStyle={styles.buttonstyle2 }
       title='<-Go Back' type='solid' onPress={()=>{}} />
      </View>
    )
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
  inputstyle:{
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
  link:{
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


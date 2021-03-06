import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
// import 'firebase/auth';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autocorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    borderColor: '#eee',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  label: {
    padding: 5,
    paddingBottom: 0,
    color: '#333',
    fontSize: 20,
    fontWeight: '700',
    width: '100%',
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: '#333',
    fontSize: 20,
    fontWeight: '700',
    width: '100%',
  },
});

export { Input };

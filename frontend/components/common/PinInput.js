import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const PinInput = ({ pinLength = 4, onPinChange }) => {
  const [pin, setPin] = useState(Array(pinLength).fill(''));

  const handleChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    if (onPinChange) {
      onPinChange(newPin.join(''));
    }
    if (value && index < pinLength - 1) {
      // Move to the next input
      inputs[index + 1].focus();
    }
  };

  const inputs = [];

  return (
    <View style={styles.container}>
      {pin.map((digit, index) => (
        <TextInput
          key={index}
          ref={(input) => inputs[index] = input}
          style={styles.input}
          value={digit}
          onChangeText={(value) => handleChange(value, index)}
          keyboardType="numeric"
          maxLength={1}
          secureTextEntry
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default PinInput;